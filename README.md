# AniOrbit — Website Project (PoE)

## Student Information
- **Name:** Sello Rasekgokge
- **Student number:** ST10511763
- **Module:** Web Development
- *(Add your module/subject code here if required by your submission template.)*

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

## Changelog

### Project kept to the brief (HTML, CSS, JavaScript) — 2026-10-27
**Removed**
- The `tools/` folder (a Python image script and a Node.js page generator).
  The brief only asks for HTML, CSS and JavaScript, so the project no longer
  needs Python or Node.js. The 18 pages in `titles/` and `sitemap.xml` stay as
  they were; to add a title, add it to `js/data.js`, copy an existing file in
  `titles/`, and add the new address to `sitemap.xml`.

**Added**
- `images/posters/*-300.webp`: 13 small copies of the posters (300 px wide),
  used with `srcset`/`sizes` and `<picture>` so phones download smaller images.
  `posterW` in `js/data.js` records which titles have one.

**Changed**
- Removed the `srcset` on the three character images in `anime.html`, because
  it pointed at resized copies that only the removed script created.
- Image names are now renamed by hand; the list is in `images/README.txt`.

### Homepage hero slideshow — 2026-10-27
**Changed**
- The first homepage collage (hero) is now a poster slideshow. The centre poster
  is the active slide, with the previous and next posters peeking in at the
  sides. It uses the same six posters: Attack on Titan, Demon Slayer, Naruto,
  Bleach, Spy x Family and My Hero Academia. The second collage (four posters
  in the genre section) is unchanged.

**Added**
- `js/slideshow.js`: previous/next buttons, clickable dots, keyboard arrows,
  swipe on touch screens, a caption with a "View details" link, and autoplay
  every 4.5 seconds.
- Accessibility: the slideshow is a labelled carousel region, inactive slides
  are hidden from screen readers and the tab order, autoplay pauses on hover
  and keyboard focus and has a pause/play button, and visitors who set
  "reduce motion" in their system get no autoplay at all.
- Without JavaScript the six posters appear as a simple grid instead.

**Removed**
- The static 6-poster collage styles (`collage-6`, `hero-collage`).

### Homepage poster collages — 2026-10-27
**Changed**
- The first homepage collage (hero) is now a staggered grid of 6 posters:
  Attack on Titan, Demon Slayer, Naruto, Bleach, Spy x Family and My Hero Academia.
- The second collage (Browse anime by genre section) is now a row of 4 posters:
  Steins;Gate, Death Note, Toradora! and KonoSuba.
- Each poster links to its title page and has descriptive alt text. The hero
  posters load immediately; the second collage is lazy-loaded.
- The old `aniorbit-hero-collage` and `featured-anime-collage` images are no
  longer used on the homepage.

### Real poster images added — 2026-10-27
**Added**
- 18 official promotional posters in `images/posters/` (one per catalogue title),
  cropped to a 2:3 portrait, resized to at most 600 x 900 px and saved as
  WebP (about 10 to 150 KB each) for fast loading.
- `poster` field in `js/data.js` now points to each file, so the posters appear
  automatically in the Top 10 rail, chart rows, poster grid, mood picks,
  watchlist tabs and title pages. Title pages also gain an `og:image` share
  image.

**Changed**
- Poster links inside cards are hidden from keyboard and screen-reader users
  (the title link beside each poster already names the card), avoiding a
  duplicate, unlabelled link.

### Browse Anime rebuilt as an IMDb-style chart — 2026-10-27
**Added**
- `titles/` folder with 18 generated title pages (poster, score, rank, plot,
  details, main characters, rate and watchlist buttons, similar titles), each
  with its own title tag, meta description and structured data.
- `sitemap.xml` now lists all 24 pages.
- `js/title.js` for title-page behaviour; star-rating dialog and ratings store
  in `js/main.js`; ranks, votes, type, plot and characters added to `js/data.js`.
- Browse Anime: Top 10 rail with Top rated / Most popular toggle, browse-by-genre
  tiles, advanced filters (type, minimum score, year range), more sort options,
  list and poster views, `?genre=` links, and a My ratings tab.
- Generated "orbit" poster artwork for every title.

**Changed**
- Catalogue rows and cards now link to title pages instead of opening a pop-up;
  the pop-up was removed from `js/main.js`.
- Cards use portrait posters, rank badges, score badges and a Rate button.
- Page copy on `anime.html` updated to describe the chart.

### Part 3 — Functionality and SEO — 2026-10-26
No marks or feedback were released for Part 2, so there were no feedback
corrections to carry over.

**Added (JavaScript)**
- `js/theme.js`, `js/data.js`, `js/main.js`, `js/home.js`, `js/catalogue.js`
  and `js/forms.js` (replacing the placeholder `main.js`).
- Mood Orbit recommender, top-rated picks, searchable/filterable/sortable
  catalogue, My Orbit watchlist, tabs, accordion, modal pop-ups, image
  lightbox, scroll-reveal animation and the animated hero orbit.
- Light/dark theme toggle with saved preference.

**Added (forms)**
- Replaced the contact form with a validated form (name, email, optional phone,
  message type, message) that compiles an email for the recipient in the code.
- Enquiry form now adapts to enquiry type, validates input and shows an
  AJAX-loaded response with cost and availability (`data/enquiry-responses.json`).

**Added (SEO, performance, security)**
- Unique page titles and meta descriptions, Open Graph tags, JSON-LD,
  `robots.txt`, `sitemap.xml`, a custom `404.html` and a skip-to-content link.
- Content Security Policy and referrer policy meta tags.

**Changed**
- Image files given descriptive names (for example `u.webp` became
  `naruto-uzumaki.webp`) and all page references updated.
- Google Fonts moved from a CSS `@import` to `<link>` tags with `preconnect`.
- Catalogue page: the two static catalogue images and static genre list were
  replaced by the dynamic catalogue; genre links became filter buttons.
- Stylesheet refactored to theme tokens (`--surface`, `--heading`,
  `--link-text`) so the same CSS powers both light and dark themes.
- Page headers gained a theme toggle button; `<main>` elements gained an id for
  the skip link.

### Part 2 — CSS styling and responsive design — 2026-10-26
**Added**
- Responsive images: a `<picture>` element with 480px/800px sources for the
  homepage hero, `srcset` and `sizes` on the three character images on
  `anime.html`, and `loading="lazy"` on below-the-fold images (`news.html`,
  `anime.html`).
- Part 2 Details section in this README.

### Colour palette update — 2026-09-18
- Replaced the deep purple + cyan palette with **Deep Midnight Blue
  (`#0b132b`)** for the header, nav, footer, and hero, paired with a
  **green accent** inspired by the requested "venomous green" (`#68ff14`).
- To avoid eye strain, the full-intensity green is now reserved for small
  details only (nav underline, hover states, focus rings), while a muted,
  deepened version (`#3dbf2e`) is used for larger surfaces like buttons —
  same hue family, softer at scale.
- Removed leftover purple-tinted undertones from the neutral gray tokens
  (borders, muted text) so they sit cleanly against the new navy theme.

### Part 1 corrections — 2026-09-18
Following a self-review against the Part 1 brief, the following corrections
were made to the initial HTML submission.

**Fixed (HTML validity)**
- `index.html`: 8 `<section>` tags were opened but only 2 closed, leaving six
  homepage sections nested inside one another; all sections are now balanced
  and properly closed.
- `news.html`: 4 `<section>` tags opened, only 2 closed (Latest Reviews and
  Trending were left open); now balanced.
- `anime.html`: the `id="catalogue"` section was never closed, and a stray
  `</main>` tag was sitting inside `<header>` with no matching opening tag;
  both fixed, and the character spotlight is now its own properly closed
  section.
- `enquiry.html`: a duplicate `</main>` closing tag (closed twice in a row)
  was removed.
- `about.html`: the last nav `<li>` was missing its closing `>` (`</li` with
  no bracket); fixed.
- Removed a duplicate `<h1>` per page — the header brand name ("AniOrbit")
  is no longer marked up as a heading, so each page now has exactly one
  `<h1>` (the page title).

**Added**
- External stylesheet (`css/style.css`) linked from every page, replacing
  all inline `style` attributes.
- `js/main.js` placeholder, reserved for Part 3 functionality work.
- Horizontal navigation menu with a pure-CSS mobile toggle (no JavaScript
  dependency), consistent across all six pages.
- `<meta charset="UTF-8">`, `<meta name="viewport">`, and a meta description
  added to every page (previously missing on all of them).
- Descriptive `alt` text on every image site-wide (previously missing on
  `index.html`, `about.html`, `news.html`, `contact.html`, and `enquiry.html`).
- A contact form (name, email, subject, message) on `contact.html`, which
  previously had contact details only.
- `images/README.txt` documenting the folder rename and listing every image
  filename the site expects.

**Changed**
- Renamed all image path references from `Images/` (capitalised) to
  lowercase `images/`, since folder names are case-sensitive on GitHub
  Pages and most Linux-based hosts and the old paths would have broken on
  deployment.
- Updated the site's background colour from a placeholder `aquamarine` to
  the brand palette from the project proposal (deep purple `#241536` /
  `#3D2265`, orbit cyan `#00C2CB`), applied via the new stylesheet.
- Corrected a character name typo on `anime.html`: "Ichigo Kurasaki" →
  "Ichigo Kurosaki".

## References
*(Harvard style, adapted for the IIE. Add the source and licence of every image you use.)*

AlternativeTo (n.d.) *The best MyAnimeList alternatives: top anime/manga tracking apps like MyAnimeList*. Available at: https://alternativeto.net/software/my-anime-list (Accessed: 26 October 2026).

Ahrefs (n.d.) *Top anime-planet.com competitors and alternatives*. Available at: https://ahrefs.com/websites/anime-planet.com/competitors (Accessed: 26 October 2026).

Digital Citizen (n.d.) *Best anime sites to watch and talk about your favorites*. Available at: https://www.digitalcitizen.life/best-anime-sites-to-watch-and-talk-about-your-favorites/ (Accessed: 26 October 2026).

Recoverit (n.d.) *AniList alternatives*. Available at: https://recoverit.wondershare.com/video-tips/anilist-alternatives.html (Accessed: 26 October 2026).

Google Fonts (n.d.) *Poppins* and *Roboto*. Available at: https://fonts.google.com (Accessed: 26 October 2026).

IMDb (n.d.) *IMDb: ratings, reviews and where to watch the best movies and TV shows* (design inspiration for the chart and title pages). Available at: https://www.imdb.com (add your own access date).
