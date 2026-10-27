# Contoso × GitHub: AI-Powered SDLC Workshop

Workshop site for a half-day, demo-led session with Contoso (13:00–16:30): how GitHub brings planning, GitHub Copilot, built-in security and CI/CD into one developer platform, and how AI is moving from assisted to agentic software development.

**Live site:** https://ibranibeny.github.io/contoso-github-ai-workshop/

## Agenda

| Time | Session |
|---|---|
| 13:00–13:15 | Opening & Software Development in the AI Era |
| 13:15–13:40 | GitHub as an AI-Powered Developer Platform |
| 13:40–14:10 | Accelerating Developer Productivity with GitHub Copilot |
| 14:10–14:35 | Building Security into the Developer Workflow |
| 14:35–14:45 | Break |
| 14:45–15:45 | Live Demo: From Business Requirement to Production |
| 15:45–16:10 | The Next Evolution: Agentic Software Development |
| 16:10–16:30 | Discussion, Use Cases & Next Steps |

## What's in this repository

| Path | Purpose |
|---|---|
| `index.html` | Overview, agenda with session progress, demo videos, how to use the site |
| `01-ai-era.html` … `07-next-steps.html` | One guide per session: key message, content, knowledge check, facilitator notes, sources |
| `03-copilot.html`, `04-security.html` | Session guides with a simulated demo video of the session's mini demos |
| `05-live-demo.html` | Live demo runbook: story, clickable architecture, demo video, six acts, prompts, files, fallbacks |
| `06-agentic.html` | Agentic development: clickable agentic loop and demo video |
| `07-next-steps.html` | Use-case canvas: capture ideas, score value and feasibility, plot them, export Markdown or CSV |
| `videos.html` | All four demo videos with chapters |
| `replay.html` | Interactive replay of a demo (`?demo=copilot`, `security`, `live-demo` or `agentic`) |
| `videos/` | Rendered MP4 videos (1920 × 1080, 25 fps, captions, no audio) and poster images |
| `facilitator.html` | Roles, run of show, preparation checklists, demo environment build, watchlist |
| `resources.html` | GitHub Docs and Microsoft Learn links with a filter, certifications, glossary |
| `assets/` | Shared CSS and JavaScript, the replay engine (`replay.js`, `replay.css`) and the demo scenarios (`demos.js`) |
| `tools/render-video.mjs` | Renders a replay to MP4 with headless Chrome and ffmpeg |

There are no external fonts, images, scripts or trackers. Knowledge-check answers, checklists, session progress, the facilitator timer and the use-case canvas are stored only in the visitor's browser (localStorage).

## About the demo videos

The videos are **simulated screen recordings** of the demos for Sessions 3–6. Steps, prompts, settings and file names follow the runbooks on this site and GitHub Docs, but the screens are re-creations and the AI output is illustrative. Every frame is labelled *Simulated demo*.

To re-render a video locally (Node.js 22 or later, Chrome and ffmpeg):

```bash
node tools/render-video.mjs --site . --demo live-demo --out videos/live-demo.mp4 --poster videos/live-demo.jpg
node tools/render-video.mjs --site . --demo agentic --out videos/agentic.mp4 --poster videos/agentic.jpg
# also: --demo copilot (Session 3) and --demo security (Session 4)
```

## Sources

Content is compiled from GitHub Docs (docs.github.com), the GitHub changelog and blog, and Microsoft Learn, checked on 26 October 2026. GitHub features, plans and preview status change often, so re-check the watchlist in `facilitator.html` the week before delivery.

## Publish with GitHub Pages

Settings → Pages → Build and deployment → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
