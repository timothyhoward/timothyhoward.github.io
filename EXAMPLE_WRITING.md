# Example Writing Content

This file shows the recommended front matter and shortcode usage for posts and notes.

## Example Post

Path: `content/writing/posts/example-post.md`

```markdown
---
title: "Example Post Title"
date: 2026-01-06
summary: "A short subtitle that appears under the title."
tags: ["trade", "strategy", "analysis"]
# lastmod: 2026-01-12
# draft: true
---

Here is the opening paragraph for the post. Use this space to set the scene and
introduce the core idea.

Here's a sentence with a sidenote{{< sidenote text="A short explanatory note that sits in the margin." >}} that clarifies a detail.

You can also add a margin note{{< marginnote text="Use margin notes for asides, definitions, or links." label="+" >}} for extra context.

{{< figure src="/img/figure-placeholder.svg" alt="Placeholder figure" caption="A standard figure with a caption." >}}

{{< figurewide src="/img/figure-placeholder.svg" alt="Full-width figure" caption="A wider figure for larger images." >}}

{{< marginfigure src="/img/figure-placeholder.svg" alt="Margin figure" caption="A smaller figure that sits in the margin." >}}
```

## Example Note

Path: `content/writing/notes/example-note.md`

```markdown
---
title: "Example Note Title"
date: 2026-01-06
summary: "A quick note, observation, or link."
tags: ["note", "idea"]
# draft: true
---

Short notes work well as a single paragraph with one key idea. You can still use
shortcodes for emphasis or context{{< sidenote text="Notes can still use sidenotes if helpful." >}}.
```
