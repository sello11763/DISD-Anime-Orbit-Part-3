# AniOrbit — Website Project 
## Project Overview
AniOrbit is a fictitious online platform created for anime lovers to explore,
discover, and learn more about anime in one clear, well-organised place —
titles, genres, characters, reviews, and recommendations — instead of
searching across many scattered sites.

## Website Goals and Objectives
- Provide accurate, easy-to-find anime information (titles, genres,
  summaries, characters, studios, ratings).
- Help users discover new anime through browsing by genre/studio and
  featured/trending content.
- Increase engagement through reviews, news, and a community enquiry channel.
- Establish AniOrbit as a clear, trustworthy, welcoming anime resource.
- Deliver a fast, accessible, mobile-friendly experience.

## Key Features and Functionality
- **Home (`index.html`)** — hero with a 6-poster slideshow and animated orbit artwork, **Mood Orbit**
  recommender, top-rated anime loaded from the catalogue data, feature
  highlights, news preview, and enquiry/contact calls to action.
- **About Us (`about.html`)** — history, mission, vision, a beginner-friendly
  **FAQ accordion**, and the target audience.
- **Browse Anime (`anime.html`)** — an IMDb-style chart: Top 10 rail
  (top rated / most popular), browse-by-genre tiles, advanced filters (search,
  genre, type, minimum score, release years), sorting, list and poster views,
  global rank numbers, star ratings, and tabs for My Orbit and My ratings. It
  also serves the "services/products" role for this platform.
- **Title pages (`titles/*.html`, 18 pages)** — one page per anime with poster,
  score and rank, plot, details, main characters, rate and watchlist buttons,
  and a "More like this" row. These are extra pages beyond the five required
  ones and are listed in `sitemap.xml`.
- **News and Updates (`news.html`)** — reviews, trending stats, news and manga
  announcements, with an **image lightbox gallery**.
- **Community Enquiries (`enquiry.html`)** — validated enquiry form that
  adapts to the enquiry type and answers with cost and availability.
- **Contact (`contact.html`)** — contact details plus a validated form that
  compiles an email to the AniOrbit team.
- **Light and dark theme** toggle (remembers the visitor's choice).
- Consistent horizontal navigation (collapsing to a menu on mobile) and footer.

## Competitor Research and What AniOrbit Does Differently
Before building Part 3, other anime recommendation and tracking sites were
reviewed (see References):

| Site | What it is known for | How AniOrbit responds |
|------|----------------------|-----------------------|
| MyAnimeList | Largest catalogue, ratings and rankings, character and cast details, recommendation chains, active forums | Searchable catalogue with scores, detail pop-ups and a character spotlight |
| AniList | Modern, minimalist, customisable design with detailed tracking | Clean card layout, a light/dark theme toggle and a personal watchlist |
| Anime-Planet | Recommendation engine driven by your ratings, legal streaming links, no login needed to browse | Mood Orbit gives recommendations instantly without rating dozens of shows first |
| IMDb (film and TV) | Ranked top-rated charts, a page for every title with plot, cast and ratings, user ratings, watchlists and advanced search | Browse Anime is built as a chart with ranks and filters, and every anime has its own title page, rating and watchlist button |
| Kitsu | Clean design with social feeds | Community enquiry and contributor sign-up channel |
| LiveChart | Seasonal schedule planning | Not built yet; listed as a future feature |

**What makes AniOrbit unique:** Mood Orbit (recommendations based on how you
feel rather than what you have already rated), a no-account watchlist that
lives in the visitor's own browser, a beginner-first FAQ, and an "orbit" visual
identity (animated rings, My Orbit, Orbit score) that ties the site together.

## Timeline and Milestones
| Day | Milestone |
|-----|-----------|
| Day 1 | Research project requirements; establish the fictitious organisation |
| Day 2 | Finalise target audience, website goals, objectives, and KPIs |
| Day 3 | Research comparable anime websites; analyse strengths/weaknesses |
| Day 4 | Develop sitemap, website structure, and low-fidelity wireframes |
| Day 5 | Finalise colour scheme, typography, branding, and UI direction |
| Day 6 | Build HTML structure for all pages |
| Day 7 | Part 1 review — identify and log corrections needed |
| Day 8 | Part 2: build external stylesheet, responsive layout, navigation |
| Day 9 | Part 3: JavaScript features, form validation, SEO files, deployment |

## Sitemap
Flat single-level structure — every page is reachable from the main
navigation on every other page:

```
Home (index.html)
 ├─ About Us (about.html)
 ├─ Browse Anime (anime.html)
 ├─ News and Updates (news.html)
 ├─ Community Enquiries (enquiry.html)
 └─ Contact (contact.html)
```

## File and Folder Structure
```
/
├── index.html  about.html  anime.html  news.html  enquiry.html  contact.html
├── 404.html
├── titles/            (18 generated title pages, one per anime)
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css
├── js/
│   ├── theme.js       (applies saved theme before paint)
│   ├── data.js        (catalogue, moods, enquiry fallback data)
│   ├── main.js        (theme toggle, reveal animation, accordion, lightbox, cards, modal, watchlist)
│   ├── home.js        (Mood Orbit and featured picks)
│   ├── slideshow.js   (homepage hero poster slideshow)
│   ├── catalogue.js   (chart, rail, filters, sort, views, tabs)
│   ├── title.js       (title pages: rate, watchlist, similar titles)
│   └── forms.js       (validation, email compilation, AJAX enquiry response)
├── data/
│   └── enquiry-responses.json
├── images/
│   ├── posters/       (optional licensed poster art)
│   └── README.txt     (image names and sourcing notes)
```

## Part 2 Details — CSS Styling and Responsive Design
- **External stylesheet:** `css/style.css`, linked from all six pages.
- **Base style and reset:** box-sizing reset, zeroed default margins, and
  site-wide font, colour, and line-height defaults set via CSS custom
  properties (design tokens) in `:root`.
- **Typography:** Poppins for headings and Roboto for body text, with a
  fluid heading scale using `clamp()`.
- **Layout:** CSS Grid for card/feature/form layouts and Flexbox for the
  header, navigation, chips, and footer.
- **Visual styles:** colour palette, `box-shadow`, borders, and `:hover`,
  `:focus-visible` states on links, buttons, chips, cards, and form fields.
- **Responsive design:** breakpoints at 900px, 760px, and 520px; the
  horizontal nav collapses into a pure-CSS menu on mobile, multi-column
  layouts switch to a single column, and `rem`, `%`, `fr`, and `vw` units
  are used for sizing and spacing.
- **Responsive images:** `<picture>` with a 300 px source for small screens
  on the homepage slideshow and collage, `srcset` and `sizes` on the posters
  built by `js/main.js`, and `loading="lazy"` on below-the-fold images.

## Part 3 Details — Functionality and SEO

### JavaScript (all in external files under `js/`)
- **Interactive elements:** accordion (`about.html`), tabs (`anime.html`),
  modal detail pop-ups (native `<dialog>`), and a lightbox gallery with
  keyboard support (`news.html`). Written in plain JavaScript, no framework.
- **Animations and transitions:** the hero poster slideshow, scroll-reveal using `IntersectionObserver`,
  hover and press transitions, an animated orbit graphic in the hero, and
  modal entrance animations. All motion is switched off for visitors who set
  "reduce motion" in their system.
- **DOM manipulation and dynamic content:** anime cards, mood picks, the
  watchlist and the featured section are built from `js/data.js` at run time.
- **Search, filter and sort:** the catalogue is searchable by title, studio,
  genre and year, filterable by genre, and sortable by score, year or title.
- **Extra features:** Mood Orbit recommender, My Orbit watchlist and 1 to 10
  star ratings (both saved with `localStorage`), global rankings, a Top 10
  rail, a "More like this" matcher (shared genres and moods), and a
  light/dark theme toggle.
- **Posters:** every title shows its official poster from `images/posters/`.
  If a poster is missing or `poster` is set to `null` in `js/data.js`, an
  original generated "orbit" poster is used instead.
- **Interactive map:** intentionally left out, because AniOrbit is a fictitious
  online-only organisation with no physical location.

### Forms
- **`enquiry.html`** (services/sponsorship enquiries): the fields change
  depending on whether the visitor is making a general enquiry, offering to
  contribute, or asking about sponsorship. After validation the page fetches
  `data/enquiry-responses.json` with AJAX (`fetch`) and replies with the
  **cost and availability** for the choice made. If the file cannot be loaded
  (for example when opened straight from the file system) built-in fallback
  data is used.
- **`contact.html`** (general messages): collects name, email, optional
  phone, the type of message and the full message. After validation the input
  is compiled into an email and shown as a preview with an "Open in my email
  app" button that sends it to the recipient set in `js/forms.js`
  (`hello@aniorbit.example`).
- **Validation:** HTML5 attributes (`required`, `type="email"`, `type="tel"`,
  `minlength`, `maxlength`) plus JavaScript checks for name format, email
  format, South African phone numbers, selection of options, subject length
  and message length (20 to 1000 characters). Errors show beside each field,
  the first invalid field receives focus, and fields are linked to their error
  text with `aria-describedby`.

### SEO
- **Keyword research:** target phrases are "anime recommendations", "anime
  reviews", "browse anime by genre", "anime catalogue", "anime news" and
  "new to anime". They appear naturally in titles, descriptions, headings and
  body text.
- **Title tags and meta descriptions:** unique for every page (titles kept
  short, descriptions under about 160 characters), plus Open Graph tags.
- **Headings:** exactly one `<h1>` per page, followed by logical `<h2>`/`<h3>`.
- **Images:** descriptive file names (for example `naruto-uzumaki.webp`),
  meaningful `alt` text, width/height attributes and lazy loading.
- **URLs and internal linking:** short lowercase file names (for example
  `/anime.html`), and links between related pages in the content (catalogue,
  Mood Orbit, news, FAQ, enquiry).
- **Mobile-friendliness:** viewport tag, responsive layout, and a collapsing
  navigation menu.
- **Structured data:** JSON-LD `WebSite` markup on the homepage.
- **`robots.txt` and `sitemap.xml`:** included. Replace
  `YOUR-USERNAME.github.io/aniorbit` with the real deployed address.
- **Off-page SEO plan (written, not built):**
  - *Backlinks:* ask anime blogs, student tech groups and Reddit/Discord
    communities to link to the catalogue, and offer guest reviews through the
    contributor programme.
  - *Social media:* share Mood Orbit picks and weekly trending cards on
    Instagram, X and TikTok (the contact page links to these profiles).
  - *Local SEO:* not applicable, because AniOrbit is an online-only fictional
    organisation. If it served a local community, a Google Business Profile
    would be added.

### Performance and security
- Fonts load with `preconnect` instead of a blocking CSS `@import`; scripts use
  `defer`; images use lazy loading and responsive `srcset`/`<picture>`.
- A Content Security Policy meta tag restricts scripts to the site's own files,
  all user text is inserted with `textContent` (never as raw HTML), a
  `referrer` policy is set, and HTTPS is provided by the hosting platform.

