# Akif Portfolio

Personal portfolio of Ahmed Jahin Akif, built with **React 18**, **React Router 6** and **Vite 5**.
Plain JavaScript and plain CSS. No UI library, so there is nothing extra to learn.

## Run it

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install      # once, to download the dependencies
npm run dev      # start the dev server, then open the URL it prints
npm run build    # create the production site in /dist
npm run preview  # preview the production build locally
```

## The one rule of this project

**Content lives in `src/data`. Looks live in `src/components`.**

If you want to change *what the site says*, you only edit a file in `src/data`.
If you want to change *how something looks or behaves*, you edit that component's
`.jsx` file and the `.css` file sitting next to it.

## Design system

The rules for how this site looks live in the **Akif Portfolio design system**:
https://claude.ai/artifact/PhWtp9ZoNRBgqbCzWGq6G9

Read it before adding a page, a section or a component. It holds the colour, type,
spacing and corner tokens, a card for every reusable component with usage rules,
and the look of components that are not built yet (table, carousel, cards, image
cards, quotes, accordion, timeline, form fields, tooltip). Its "Adding to the site"
section is the step-by-step checklist.

## I want to change... (quick lookup)

| I want to change | Edit this file |
| --- | --- |
| Name, email, LinkedIn/GitHub links | `src/data/profile.js` |
| Hero text, typed roles, hero buttons | `src/data/profile.js` → `hero` |
| The four headline numbers on Home | `src/data/profile.js` → `facts` |
| "What I'm on right now" cards | `src/data/profile.js` → `now` |
| Words on the scrolling tape | `src/data/profile.js` → `homeTape`, `src/data/contact.js` → `contactTape` |
| Add / edit / remove a project | `src/data/projects.js` |
| Jobs and their dates, talks, volunteering | `src/data/experience.js` (dates go in `period`) |
| Skills | `src/data/skills.js` |
| Schools and their years, research cards | `src/data/education.js` (years go in `period`) |
| Recommendations ("What people say") | `src/data/recommendations.js` |
| Tooltip text for the Japanese lettering | `src/data/profile.js` → `kanaGloss`, `kanaInitialGloss` |
| About story, profile card, rules, achievements | `src/data/about.js` |
| Contact heading, topics, clock time zone | `src/data/contact.js` |
| Menu items | `src/data/navigation.js` (and `src/App.jsx` for a new page) |
| Colors, fonts, corner radius | `src/styles/tokens.css` |
| Which fonts are loaded | `index.html` (then update `tokens.css`) |
| Browser tab title, search description | `index.html` |
| Typing animation speed | `src/hooks/useTypedText.js` (constants at the top) |
| Hero background animation | `src/components/home/NetworkCanvas.jsx` (constants at the top) |
| Page-change swipe effect (speed, look) | `src/components/layout/ViewWipe.css` |
| The Japanese name on the swipe | `src/data/profile.js` → `kana` |

## Folder map

```
index.html                 The single HTML page. Loads fonts and src/main.jsx.
vite.config.js             Build tool settings.
public/                    Files copied to the site as they are (favicon, photos).
src/
  main.jsx                 Entry point. Starts React and the router.
  App.jsx                  Route table: which URL shows which page.

  styles/
    tokens.css             Design tokens: every color, font and shared size.
    global.css             Base styles shared by all pages.

  data/                    ALL site content. Plain JavaScript objects.
    profile.js             Name, email, links, Home page text.
    projects.js            Projects on the Work page.
    experience.js          Jobs (timeline), talks and volunteering.
    skills.js              Skill groups.
    education.js           Schools (timeline) and research cards.
    recommendations.js     Quotes for the About page (empty until real ones are added).
    about.js               About page text.
    contact.js             Contact page text and topics.
    navigation.js          Menu entries.

  hooks/                   Small reusable pieces of logic.
    useReducedMotion.js    Did the visitor ask for fewer animations?
    useTypedText.js        Typewriter effect.
    useClock.js            Live clock for a time zone.
    useCopyToClipboard.js  Copy text and show "Copied".

  components/              One component per file, with its CSS beside it.
    layout/                Frame around every page.
      Layout               Header + current page + footer.
      Header               Top bar (name, menu, copy-email).
      Dock                 The main menu pill.
      Footer               Bottom line.
      ViewWipe             Apricot swipe between pages.
    ui/                    Generic building blocks used everywhere.
      Button               Link or button, three styles.
      CopyEmailButton      Copies the email address.
      Tape                 Tilted scrolling band.
      TagList              Row of small labels.
      TickList             Bullet list with diamond markers.
      Tile                 Simple titled card.
      SectionBlock         A titled section inside a page.
      ViewHeader           Big page title.
      Timeline             Vertical rail with dates (experience, education).
      Tooltip              Glossary card for the Japanese lettering.
      Quote                Recommendation card.
    home/                  Hero, TypedRole, NetworkCanvas, FactGrid, NowGrid
    work/                  ProjectList, ProjectDetail, ProjectFlow
    background/            SegmentedNav, LeadershipList, SkillCard
    about/                 Story, ProfileCard, RulesGrid, AchievementList, MoreList
    contact/               LocalClock, TopicPicker, ChannelList

  pages/                   One file per page. Pages only arrange components.
    HomePage.jsx           /
    WorkPage.jsx           /work and /work/:projectId
    BackgroundPage.jsx     /background (shell with the tab switch)
    background/
      ExperiencePanel.jsx  /background/experience
      SkillsPanel.jsx      /background/skills
      EducationPanel.jsx   /background/education
    AboutPage.jsx          /about
    ContactPage.jsx        /contact
```

## How the pieces fit together

1. `index.html` loads `src/main.jsx`.
2. `main.jsx` renders `<App />` inside a router.
3. `App.jsx` looks at the URL and picks a **page** from `src/pages`.
4. Every page is wrapped by `Layout`, which adds the header and footer.
5. A page imports **data** from `src/data` and passes it to **components** as props.
6. Each component renders its HTML and imports its own CSS file.

So data flows one way: `data file → page → component`.

## Conventions

- **One component per file.** The file name is the component name (`Hero.jsx` exports `Hero`).
- **CSS sits next to its component** (`Hero.jsx` + `Hero.css`).
- **CSS class names start with the component name** and use `__` for parts and
  `--` for variations, for example `.hero__name`, `.btn--hot`. This keeps
  styles from one component from leaking into another.
- **Never hard-code a color.** Use the variables from `tokens.css`, such as `var(--apricot)`.
- **Every file starts with a comment** that says what it is and where its content comes from.
  Please keep that habit when you add files.

## Common tasks

### Add a project
Open `src/data/projects.js`, copy one of the objects, change the `id` to something
unique, and fill in the fields. The list of fields is documented at the top of that file.
It appears on the Work page automatically at `/work/<your-id>`.

### Add a job
Open `src/data/experience.js` and add an object to `jobs`. Put the newest first,
and write its dates in `period` (for example `'Jan 2024 – Present'`).

### Add a school
Open `src/data/education.js` and add an object to `schools`, newest first,
with its years in `period`.

### Add a recommendation
Open `src/data/recommendations.js` and follow the example in the comment.
The "What people say" section appears on the About page as soon as the list
has one entry. Only use real quotes.

### Add a page
1. Create `src/pages/MyPage.jsx` (copy `AboutPage.jsx` as a starting point).
2. Add `<Route path="my-page" element={<MyPage />} />` in `src/App.jsx`.
3. Add `{ label: 'My page', to: '/my-page' }` to `mainNav` in `src/data/navigation.js`.

### Change the theme colors
Edit the values under `/* ---- Colors ---- */` in `src/styles/tokens.css`.
One extra step: the hero animation is drawn on a canvas and cannot read CSS
variables, so also update `PERI_RGB` and `APRICOT_RGB` at the top of
`src/components/home/NetworkCanvas.jsx`.

### Use a photo instead of the katakana avatar
Follow the three steps written at the top of `src/components/about/ProfileCard.jsx`.

## Things still to fill in

- `src/data/experience.js`: the dates of every job (`period`), any earlier jobs,
  and the date of the talk.
- `src/data/education.js`: the exact degree title and years for AIUB, plus
  college and school entries.
- `src/data/recommendations.js`: real recommendations.
- A profile photo (optional).

## Deploying

Run `npm run build` and upload the `dist` folder to any static host
(Vercel, Netlify, GitHub Pages, Cloudflare Pages).

The site uses `HashRouter`, so URLs look like `yoursite.com/#/work/querio`.
That works on every host with no server configuration. If you prefer clean URLs
(`yoursite.com/work/querio`), change `HashRouter` to `BrowserRouter` in
`src/main.jsx` and set up your host to serve `index.html` for all paths.
