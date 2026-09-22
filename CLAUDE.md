# Genevra E.T. personal website

## What this is
A personal website for Genevra (professional name: Genevra Guo; site/brand name: **Genevra E.T.**).
She works in biomedical engineering and neuroscience, writes and illustrates literary stories (Dali Forest), takes photographs, draws, carves stone seals, and has built her own website, **myanetherflow** (a Feng Shui website).

It is a **quiet personal archive / field notebook**: a clean, clearly signposted front door, with the real things she has made and noticed inside. It should feel like a person's long-running collection, not a portfolio.

Two audiences:
1. Recruiters and PIs arriving from her CV. They must quickly confirm "this is the same person" and find Research and CV.
2. Strangers who might get curious enough to enter Dali Forest or her hobbies pages.

## Architecture
- **Home**: "Who is Genevra?" in about 30 seconds. It answers only three questions: who she is, what she does, what she is curious about. It is one screen to one and a half screens long.
- **Research**: what she studies. Professional and structured.
- **Dali Forest**: what she is building. Her main ongoing creative project.
- **myanetherflow**: her own website (spelling confirmed: myanetherflow; the asset folder was originally named `myanetherflew`). It has its own nav entry. Ask her for the URL and whether it opens in a new tab or gets a short page here first. Its cat drawing (`jerry-cat.png`) belongs here.
- **Hobbies**: photography, drawings, seal carving. New kinds of things she makes or notices slot in here without a redesign.
- **CV**: the formal version.

Nav (lowercase, in this order): **research, dali forest, myanetherflow, hobbies, cv**. There is deliberately no About in the nav: the home page carries the introduction. An About page can be added later if she wants one. Only the homepage exists so far.

## Reference file
`reference/homepage-prototype.html` (v17) is the approved visual prototype of the **homepage only**. Match its type, spacing and tone, and reuse its CSS tokens. Inner pages (Research, Hobbies, etc.) should use the "row" layout described below.

## Design direction
Tone: quiet, intelligent, curious, handmade, slightly strange and personal. Not cute. Her real material is the decoration.
- **One layout rule for every section:** a row with a hairline above it, section name on the left (Newsreader), content on the right. New sections become new rows. Do not invent different treatments per section.
- **Nothing drawn by Claude.** No generated icons, no wobble borders, no fake hand-drawn effects. If real material does not exist yet, use a plain grey placeholder block and say so.
- **No accent colour.** Paper, ink and grey only. All colour comes from her own work (the deer, the peacock, sky and stone in photographs). Do not add a "seal red" or any brand colour.
- Handwritten text (Caveat) is her quiet voice, used sparingly: nav hover notes (research "what I study", dali forest "where the animals live", myanetherflow "a website I built", hobbies "things I do for fun", cv "the formal version") and links ("explore", "enter the forest", "see more"). Not for section headings.
- **Home is deliberately simple.** Her name, a short natural self-introduction on the left, and her drawing "me thinking" on the right. Nothing else: no research/dali forest/hobbies sections, no "selected work", no tagline or slogan, no "come in" button. The top navigation already leads everywhere, so the homepage must not repeat it. Footer has her name as "Genevra (Yiting) Guo", a short descriptor and her links.
- The drawing is an animal bending over a big black spiral, with two of her apple trees. The trees are deliberately staggered (the two trees sit close together at different heights, the upper one very slightly left of the lower one), not stacked in a tidy column. The grass marks are her own original strokes, re-placed in small tufts at the foot of each trunk plus one loner per tree; do not add, remove or redraw grass; do not re-align them. **The black spiral is still the focus**, but the trees are needed: a version with no trees felt heavy and sad to her. Use `assets/doodles/me-thinking-hero.png` (spiral, animal, two staggered trees; paper transparent so it sits directly on the page; give it the `trace` class for dark mode). Related files: `me-thinking-spiral-only.png` (no trees, rejected for the hero) and `me-thinking-full.png` (all five trees). Do not tidy or recolour the drawing.
- Home is the 30-second version. If she later wants a fuller story (her path from medicine to neuroscience to biomedical engineering, why research and creative work sit together), that becomes an About page, and her portrait-style drawings (`me.jpg`, `me-and-lab.jpg`) belong there.
- Images in a group are the same size (hobby tiles are all squares).
- Photography, drawings and carvings are shown as themselves: no frames, no filters.
- The **Drawings** page should be loose and non-gallery-like: images scattered at different sizes with generous whitespace, click to enlarge, no captions needed. It is the least purposeful page on purpose.
- **Research, Publications, CV** pages: pure typography and lines, no doodles.

### Tokens
- Light: paper `#fafafa`, ink `#1a1a1a`, soft grey `#6a6a6a`, hairline `#d2d2d2`, placeholder block `#ececec`.
- Dark: paper `#121212`, ink `#efefef`, soft `#9a9a9a`, hairline `#333`, block `#1e1e1e`. Black-line doodles get the `trace` class (`filter: invert(1) hue-rotate(180deg)` in dark mode).
- Fonts: Newsreader (serif, all formal text) and Caveat (handwriting voice). Only these two.
- Big name is tight (letter-spacing about -0.035em, line-height about 0.92). Body line length under about 70 characters. Lines are 1.5px ink; row dividers 1px hairline.

### Avoid
- Typical academic-template look, "AI portfolio" look, tech blue, walls of cards, flashy animation, uniform gallery grids for drawings.
- CV-style intro ("I am a ... student at ...") on the first screen.
- Explaining every image. Let things stand.

## File structure
This is the target structure for the deployable site (what goes to Netlify). Build toward it:

```
genevraet/
│
├── index.html
├── research.html
├── dali-forest.html
├── myanetherflow.html
├── hobbies.html
├── cv.html
│
├── assets/
│   ├── dali-forest/
│   ├── photography/
│   ├── drawings/
│   ├── seal-carving/
│   ├── doodles/
│   └── documents/
│
├── css/
│   └── style.css
│
└── js/
    └── main.js
```

One HTML file per nav item, at the top level (no subfolders for pages). CSS lives in `css/style.css`, shared by every page; JS, if any is needed, in `js/main.js`. `assets/documents/` is new: it's where a public CV PDF and anything else downloadable goes. Keep `CLAUDE.md`, `reference/`, and any personal CV source files (docx, the versioned CV folders) out of this structure — they inform the build but do not get deployed.

## Assets (`assets/`)
- `dali-forest/`: finished Dali Forest work, in colour, transparent background: `deer.png`, `peacock.png`, `otter-logo.png` (the Dali Forest logo). This folder is named after the project, not the medium, so future story pages, more character illustrations, and thumbnails all belong here too.
- `photography/`: 19 photographs, `photography-01.jpg` to `-19.jpg`, resized to 1600px. `photography-19` (person in an arched window) is the Hobbies tile.
- `drawings/`: 18 drawings, `drawing-01.jpg` to `-18.jpg`. Several are phone screenshots with app interface showing at the edges (for example `drawing-05`); crop those before use. Do not tidy, vectorize or recolour the drawings.
- `seal-carving/`: 6 photographs of her carved stones (a bat-shaped stone, a face, a Bach name stone, a ring).
- `doodles/`: `me-thinking-hero.png` (homepage hero), `me-thinking-spiral-only.png` and `me-thinking-full.png`, all with transparent paper; other traces `jerry-cat.png`, `black-hole-animal.png`, `apple-trees.png`; `green-scribble.jpg`; and two self-portrait drawings for a future About page, `me.jpg` and `me-and-lab.jpg`. `jerry-cat.png` comes from myanetherflow; "jerry" is the filename, confirm with her.
- `tiles/`: the square crops used by the Hobbies page (photography: a person in an arched window; drawings: a red flower on a blue mountain; seal carving: the bat-shaped stone).
- Not yet used: one `.heic` photo that could not be read, and her Feng Shui website's icon set. Ask her before publishing anything from myanetherflow beyond the nav link.

## Content rules
- **Names.** Her English name is Genevra and her Chinese name is Yiting Guo. LinkedIn uses "Genevra Guo". Instagram and YouTube use the handle `genevra.et`. Use "Genevra Guo" in running text (it matches LinkedIn) and show **"Genevra (Yiting) Guo"** in the footer and on the CV page so a search for either name finds her. Her current CVs are headed "Yiting Guo (Genevra)"; suggest she aligns the CV header and LinkedIn (for example by adding "Yiting" as an additional name) so recruiters see one consistent identity.
- Homepage introduction (approved by her, written to work for job applications as well as for curious visitors): "I'm Genevra Guo, a physician-scientist with clinical training in medicine and a PhD in neurology, now completing an M.S. in biomedical engineering at Johns Hopkins. My research spans clinical neuroscience, neuroimaging, and neural engineering. I'm especially curious about how the brain represents stories, memory, and meaning. Outside research, I write, draw, photograph, and carve seals." It is facts from her CV: update "now completing" after she graduates (expected Dec 2026). Do not rewrite it into a slogan.
- Do not invent facts about her (institutions, publications, awards, dates, project descriptions). Use bracketed placeholders like `[One sentence about your research]` and tell her what is missing.
- Dali Forest copyright line she already uses: "Story & Creative Direction by Genevra. © 2026 Genevra. All rights reserved." Put it on Dali Forest pages, not sitewide.
- Before a CV PDF goes on the public CV page, remove the phone number and street-level location, and use a permanent email address (her university email will expire after graduation).
- CV files are personal documents. Do not copy them into the repository unless she asks; link one current PDF from the CV page.

## Links
- LinkedIn: https://www.linkedin.com/in/genevra-et
- Instagram: https://www.instagram.com/genevra.et/
- Email: currently her university address yguo140@jhu.edu (it will expire after graduation; plan to switch to an address at genevraet.com). She typed `jh.edu`; this brief uses `jhu.edu` from her CV, confirm with her.
- YouTube and GitHub are deliberately not shown for now. Footer links are LinkedIn, Instagram and Email only. Add the others only when she asks.

## Quality floor
Responsive down to phone width, visible keyboard focus, real link text, meaningful alt text on photographs and drawings, light and dark mode. Keep images web-sized (the ones in `assets/` already are) and use `loading="lazy"` on anything below the first screen.

## How to work with me
- Ask before adding a framework, build step, or dependency. Default: plain HTML, CSS and a little vanilla JS, so it can be hosted anywhere.
- Build one page at a time and describe what changed in plain language.
- Keep shared styles in one CSS file and shared pieces (header, footer) consistent across pages.
