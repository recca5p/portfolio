import { writeFileSync } from 'node:fs';

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Redirecting to English</title>
    <meta http-equiv="refresh" content="0;url=/en/">
    <meta name="robots" content="noindex">
    <link rel="canonical" href="https://portfolio-7j9.pages.dev/en/">
  </head>
  <body>
    <p><a href="/en/">Continue to the English page</a></p>
  </body>
</html>
`;

writeFileSync(new URL('../dist/index.html', import.meta.url), html);
