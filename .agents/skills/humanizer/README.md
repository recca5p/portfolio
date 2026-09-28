# Humanizer

[![GitHub stars](https://img.shields.io/github/stars/blader/humanizer?style=flat)](https://github.com/blader/humanizer/stargazers) [![skills.sh installs](https://skills.sh/b/blader/humanizer)](https://skills.sh/blader/humanizer)

Humanizer makes AI-written text sound like a person wrote it, without changing what it says. It is built on Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), the guide Wikipedia editors use to catch AI-generated text, and it works in Claude Code, Codex, Cursor, OpenCode, and any other agent that supports skills.

**Before:**
> I'm thrilled to announce that after months of hard work, our team has shipped something truly special — shared drafts. It's not just a feature; it's a fundamental shift in how teams collaborate. Now two people can edit the same doc at once, seamlessly. We built it because our own team kept emailing each other files named final_v7.docx. Let that sink in. 🚀

**After:**
> Our own team kept emailing each other files named final_v7.docx, so we spent the last few months building shared drafts. They're live today: two people can now edit the same doc at once.

In a blind test, judges preferred Humanizer's rewrite over the original AI text 16 times out of 16 ([#229](https://github.com/blader/humanizer/issues/229)).

Humanizer edits for human readers. Getting past AI detectors is not a goal, and detectors still flag most of its output.

## Installation

Once installed, the skill answers to `/humanizer`.

### Claude Code

```text
/plugin marketplace add blader/humanizer
/plugin install humanizer@humanizer
```

The plugin answers to `/humanizer:humanizer`. It needs Claude Code 2.1.142 or newer; on older versions, use `npx skills add blader/humanizer --global --agent claude-code`.

### Codex

```bash
npx skills add blader/humanizer --global --agent codex
```

### Cursor

```bash
npx skills add blader/humanizer --global --agent cursor
```

To load it as a Cursor plugin instead, copy or symlink this repository into `~/.cursor/plugins/local/humanizer` and reload Cursor.

### OpenCode

```bash
npx skills add blader/humanizer --global --agent opencode
```

### Claude.ai and Claude Desktop

Download this repository as a ZIP (**Code → Download ZIP**) and upload it as a skill in Settings.

### Other agents

```bash
npx skills add blader/humanizer --global --agent '*'
```

This installs Humanizer for every agent the Skills CLI supports, including Gemini CLI, GitHub Copilot, and Windsurf. Leave off `--global` in any command above to install it only in the current project. For an agent the Skills CLI does not know, copy `SKILL.md` into its skill folder.

## Usage

Call the skill directly:

```
/humanizer

[paste your text here]
```

Or ask in plain language:

```
Please humanize this text: [your text]
```

To rewrite a file, give Humanizer its path:

```
Humanize the prose in docs/launch-post.md
```

### Match your voice

If you want the rewrite to sound more like you, include a sample:

```
/humanizer

Here's a sample of my writing for voice matching:
[paste 2-3 paragraphs of your own writing]

Now humanize this text:
[paste AI text to humanize]
```

Humanizer follows the sample's rhythm, word choice, punctuation, and deliberate quirks, including dashes if you use them.

## How it works

A language model writes whatever is most likely to come next, so by default it makes the choice that fits the widest range of readers and subjects. A person chooses for one reader and one subject. Every tell Humanizer looks for is a form of that default choice: a sentence that signals importance instead of adding a fact, rhythm or formatting applied by rule, an ordinary fact dressed as a pivotal one, text left over from the chat, or a reply that re-explains what the reader already knows.

> "LLMs use statistical algorithms to guess what should come next. The result tends toward the most statistically likely result that applies to the widest variety of cases."
> Wikipedia, ["Signs of AI writing"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)

Humanizer marks every tell it finds, strongest first. It drafts a rewrite without treating the original structure as fixed, checks the draft against the patterns and the original claims, and then writes the final version. It does not make things up. A name, number, date, quote, citation, or other factual detail must come from the source or the writer, and if a sentence needs a detail that is missing, Humanizer asks instead of inventing one.

When you paste text, Humanizer shows its work: the first rewrite, a short critique of anything that still sounds artificial, and the final version. Point it at a file and it changes only the prose, leaving code, data, frontmatter, and link targets alone. Personal writing keeps the writer's opinions and quirks. Technical and reference prose stays neutral and plain.

## The 26 patterns

The patterns are numbered by strength and frequency. The first five justify an edit on a single sighting. Patterns marked *weak alone* count only when several tells share a passage, because a careful writer may use any one of them on purpose.

### A. Staging instead of stating

| # | Pattern | Before | After |
|---|---------|--------|-------|
| 1 | **Not X but Y** | "It's not just X, it's Y", "This doesn't mean X. It means Y." | State the point directly |
| 2 | **One-line closers and dramatic fragments** | "That is the real win." after every section; "This shows the importance of..." after an example; "No prior. No nostalgia." | Cut the closer that repeats or explains the example; merge fragments into a specific claim |
| 3 | **Sayings that sound deep** | "At its core, what matters is...", "Symmetry is the language of trust" | Replace the saying with the specific claim |
| 4 | **Staged run-up before the point** | "Let's dive in", "Honestly? It depends..." | Remove the run-up and state the point |
| 5 | **Arguing with no one** | "This isn't mainly about...", "A tempting approach would be..." | Remove the unraised objection or fake option; keep any real claim |

### B. Rhythm by rule

| # | Pattern | Before | After |
|---|---------|--------|-------|
| 6 | **Forced triads** | "innovation, inspiration, and insights"; three examples plus a lesson | Use the number of items the meaning needs |
| 7 | **Repeated sentence openings** | "She noted... She noted... She filed..." | Merge the sentences or change the subject |
| 8 | **Dashes as the universal connector** (*weak alone*) | "institutions—not the people—yet this continues—" | Use periods, commas, colons, or parentheses; match a sample that uses dashes |
| 9 | **Stacked qualifiers** (*weak alone*) | "could potentially possibly be argued" | Keep only qualifiers the source supports |
| 10 | **Hyphenated pairs everywhere** (*weak alone*) | "the report is high-quality" | Keep the hyphen before the noun or where the dictionary has one |
| 11 | **Passive voice and missing subjects** (*weak alone*) | "No configuration file needed" | Name the actor when that helps |

### C. Inflation and borrowed authority

| # | Pattern | Before | After |
|---|---------|--------|-------|
| 12 | **Overused AI words** | "delve... testament... landscape... showcasing" | Use plain words |
| 13 | **Inflated significance** | "marking a pivotal moment", "Despite challenges... continues to thrive", "The future looks bright" | Keep the fact and drop the significance; end on the last concrete fact |
| 14 | **Vague connection or association** | "associated with the leadership of", "in connection with" | State the relationship the source gives |
| 15 | **Shallow -ing riders** | "symbolizing... reflecting... showcasing..." | Keep only what the source supports |
| 16 | **Sales language** | "nestled within the breathtaking region" | State what the thing is |
| 17 | **Borrowed authority** | "Experts believe...", "cited in NYT, BBC, FT, and The Hindu" | Name a real source and what it said, or remove the claim or list |
| 18 | **Avoiding is, are, and has** | "serves as... features... boasts" | "is... has" |

### D. Formatting by rule

| # | Pattern | Before | After |
|---|---------|--------|-------|
| 19 | **Bold as decoration** | "**OKRs**, **KPIs**"; "**Performance:** Performance improved" | Remove the bold; turn a labeled list into prose |
| 20 | **Decorative headings** | "Strategic Negotiations And Partnerships", "🚀 Launch Phase:", "The decision, on one screen" | Sentence case; remove emojis and arrows; name what the section holds |
| 21 | **Curly quotation marks** (*weak alone*) | `said “the project”` | `said "the project"` |

### E. Leftovers from the chat and the draft

| # | Pattern | Before | After |
|---|---------|--------|-------|
| 22 | **Chatbot residue** | "Great question! ... I hope this helps!" | Remove the wrapper and keep the content |
| 23 | **Knowledge-limit disclaimers and guesses** | "While details are limited in available sources, it appears..." | State what the source shows, or remove the sentence |
| 24 | **A heading repeated in the first sentence** | "## Performance" + "Speed matters." | Let the heading do the work |
| 25 | **Writing about the document instead of its subject** | "This function was added to replace...", "compiled from...", "The table below compares..." | Describe the subject; state a convention only when the reader cannot see it |

### F. Writing for the wrong reader

| # | Pattern | Before | After |
|---|---------|--------|-------|
| 26 | **Re-explaining what the reader knows** | A reply that walks the diagnosis and proves the plan works before the decision | Lead with the decision; leave the diagnosis and the proof for the ticket that follows |

## Full example

The writer supplied these notes with the draft, so the rewrite can use them: five days last October; a hotel in Alfama, up a lot of stairs; the hills wore them out; Tram 28 took about forty minutes and was packed with tour groups; the best custard tart came from a small place in Graça and beat the one at Pastéis de Belém; their favorite part was the quiet streets a block or two above the main squares; the castle queue was long and the visit was not worth it; next time they would go in spring, with better shoes. Every detail in the rewrite comes from the draft or these notes. Without notes like these, Humanizer asks instead of inventing.

**Before (AI-sounding):**
> I recently spent five unforgettable days in Lisbon, and let me tell you — this city completely stole my heart. From the moment I arrived, I knew I was somewhere truly special.
>
> Nestled along the banks of the Tagus River, Lisbon stands as a vibrant testament to Portugal's enduring spirit, where rich history and modern energy intertwine at every turn. Yes, the famous hills are challenging — my legs certainly felt it! — but every climb rewards you with breathtaking, panoramic views that make it all worthwhile.
>
> No trip would be complete without riding the iconic Tram 28, winding through the city's most historic neighborhoods. And the food? Simply divine. The original pastéis de nata at Pastéis de Belém are a beloved national treasure, and savoring one still warm was a moment I will never forget.
>
> But what truly makes Lisbon special isn't just the sights — it's the feeling. Wander a few steps off the main squares and you'll discover a quieter, more authentic side: sun-drenched alleys, charming tiled facades, and friendly locals going about their daily lives, inviting you to slow down and savor every moment.
>
> Of course, the must-see São Jorge Castle offers stunning views over the rooftops below. The queues can be long, but the experience is absolutely worth it for any history buff or curious traveler.
>
> Would I go back? Absolutely. Lisbon isn't just a place to visit — it's a place to fall in love with, again and again. If you're dreaming of your next getaway, this is one destination that promises memories to last a lifetime. ✨

**After:**
> I spent five days in Lisbon last October, and the hills wore me out. My hotel was in Alfama, up a lot of stairs, so every outing started or ended with a climb.
>
> Everyone says to ride Tram 28, so I did. The ride took about forty minutes, and tour groups packed the car the whole way. The best custard tart I had came from a small place in Graça, and it beat the famous one at Pastéis de Belém.
>
> My favorite part was the quiet streets a block or two above the main squares. The castle was the opposite, with a long queue and a visit I don't think was worth the wait. I'd still go back, in spring and with better shoes.

## Sources

- [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) is the source for the pattern list.
- [WikiProject AI Cleanup](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_AI_Cleanup) maintains the page.

## Version history

See [CHANGELOG.md](CHANGELOG.md).

## License

MIT

If Humanizer helps you, a star helps other people find it.
