import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const distDir = new URL('../dist/', import.meta.url);
const headersPath = new URL('../public/_headers', import.meta.url);

const walk = (dir) => {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) files.push(...walk(path));
    else if (entry.endsWith('.html')) files.push(path);
  }
  return files;
};

const scriptBodies = (html) => {
  const bodies = [];
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const attrs = match[1];
    const body = match[2];
    if (/type\s*=\s*["']application\/ld\+json["']/i.test(attrs)) continue;
    if (/\ssrc\s*=/.test(attrs)) continue;
    if (!body.trim()) continue;
    bodies.push(body);
  }
  return bodies;
};

const sha256 = (body) => createHash('sha256').update(body, 'utf8').digest('base64');

const hashes = new Set();
for (const file of walk(distDir.pathname)) {
  for (const body of scriptBodies(readFileSync(file, 'utf8'))) {
    hashes.add(sha256(body));
  }
}

const headers = readFileSync(headersPath, 'utf8');
const policyLine = headers
  .split('\n')
  .map((line) => line.trim())
  .find((line) => line.startsWith('Content-Security-Policy:'));
const scriptSrc = policyLine?.match(/script-src\s+([^;]+)/)?.[1] ?? '';
const declared = new Set([...scriptSrc.matchAll(/'sha256-([^']+)'/g)].map((match) => match[1]));

const failures = [];
if (scriptSrc.includes("'unsafe-inline'")) {
  failures.push('script-src still allows unsafe-inline');
}
if (!scriptSrc.includes("'self'")) {
  failures.push("script-src is missing 'self'");
}
for (const hash of hashes) {
  if (!declared.has(hash)) failures.push(`missing script hash sha256-${hash}`);
}
for (const hash of declared) {
  if (!hashes.has(hash)) failures.push(`stale script hash sha256-${hash}`);
}
if (hashes.size === 0) failures.push('no inline scripts found in dist');

if (failures.length) {
  console.error('CSP script hashes are out of date:');
  for (const failure of failures) console.error(`- ${failure}`);
  if (hashes.size) {
    console.error(
      `Expected script-src: 'self' ${[...hashes].map((hash) => `'sha256-${hash}'`).join(' ')}`
    );
  }
  process.exit(1);
}

console.log(`CSP script hashes match ${hashes.size} inline scripts.`);
