# williebsweet.com

Personal site built with [Astro](https://astro.build/). Writing section branded as **Primitive Thinking**.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the build locally
```

## Adding content

### Essays

Long-form write-ups live in `src/content/essays/`. Create a new `.mdx` file:

```markdown
---
title: "Your Essay Title"
description: "A short summary for listings and SEO."
pubDate: 2026-04-02
tags: [ai, data]
---

Your content here. Supports MDX, code blocks, and LaTeX math ($E = mc^2$).
```

**Optional frontmatter fields:**

| Field | Description |
|---|---|
| `updatedDate` | Date of last revision |
| `followsUp` | Filename (without extension) of a prior essay this continues, e.g. `"2026-03-15-earlier-post"` — renders a "continues the discussion from..." banner |
| `draft` | Set to `true` to hide from listings and feeds |
| `ogImage` | URL for social sharing image |

### Links

Short "here's a cool thing" posts live in `src/content/links/`. Create a new `.mdx` file:

```markdown
---
title: "Something Interesting I Found"
pubDate: 2026-04-02
url: "https://example.com/the-thing"
tags: [ai]
---

Quick thoughts on why this is worth reading.
```

The `url` field is required — it's the external link being shared. A "Source" link appears in the post header.

### Drafts

Put work-in-progress files in `src/drafts/` (outside the content directory). Astro won't process them. Move a file into `src/content/essays/` or `src/content/links/` to publish.

You can also set `draft: true` in frontmatter as a secondary safety net — those posts are filtered from listings and RSS.

## Adding projects

Projects are defined as a static array in `src/pages/index.astro`. Edit the `projects` array:

```js
const projects = [
  {
    name: 'project-name',
    description: 'One-line description of what it does.',
    tags: ['Python', 'ML'],
    url: 'https://github.com/williebsweet/project-name',
  },
  // add more here
];
```

Each project renders as a card on the landing page with the name, description, tags, and a link.

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

## Structure

```
src/
├── content/
│   ├── essays/          # long-form writing
│   └── links/           # short link-blog posts
├── drafts/              # unpublished work (ignored by Astro)
├── components/          # Nav, Footer, PostList, SocialLinks, etc.
├── layouts/             # BaseLayout, PageLayout, PostLayout
├── pages/               # routes: /, /writing, /essays, /links, /tags, /rss.xml
├── styles/global.css    # design tokens and base styles
└── utils/posts.ts       # helper to merge and sort both collections
```
