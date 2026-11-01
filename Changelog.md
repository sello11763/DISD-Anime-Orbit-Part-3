--Part 1 additions and corrections

-Added
External stylesheet (css/style.css) linked from every page, replacing all inline style attributes.
js/main.js placeholder, reserved for Part 3 functionality work.
Horizontal navigation menu with a pure-CSS mobile toggle (no JavaScript dependency), consistent across all six pages.
<meta charset="UTF-8">, <meta name="viewport">, and a meta description added to every page (previously missing on all of them).
Descriptive alt text on every image site-wide (previously missing on index.html, about.html, news.html, contact.html, and enquiry.html).
A contact form (name, email, subject, message) on contact.html, which previously had contact details only.
images/README.txt documenting the folder rename and listing every image filename the site expects.

-Changed
Renamed all image path references from Images/ (capitalised) to lowercase images/, since folder names are case-sensitive on GitHub Pages and most Linux-based hosts and the old paths would have broken on deployment.
Updated the site's background colour from a placeholder aquamarine to the brand palette from the project proposal (deep purple #241536 / #3D2265, orbit cyan #00C2CB), applied via the new stylesheet.
Corrected a character name typo on anime.html: "Ichigo Kurasaki" → "Ichigo Kurosaki".

--Part 3 — Functionality and SEO 
No marks or feedback were released for Part 2, so there were no feedback corrections to carry over.

-Added (JavaScript)
js/theme.js, js/data.js, js/main.js, js/home.js, js/catalogue.js and js/forms.js (replacing the placeholder main.js).
Mood Orbit recommender, top-rated picks, searchable/filterable/sortable catalogue, My Orbit watchlist, tabs, accordion, modal pop-ups, image lightbox, scroll-reveal animation and the animated hero orbit.
Light/dark theme toggle with saved preference.

-Added (forms)
Replaced the contact form with a validated form (name, email, optional phone, message type, message) that compiles an email for the recipient in the code.
Enquiry form now adapts to enquiry type, validates input and shows an AJAX-loaded response with cost and availability (data/enquiry-responses.json).
Added (SEO, performance, security)

Unique page titles and meta descriptions, Open Graph tags, JSON-LD, robots.txt, sitemap.xml, a custom 404.html and a skip-to-content link.
Content Security Policy and referrer policy meta tags.

-Changed
Image files given descriptive names (for example u.webp became naruto-uzumaki.webp) and all page references updated.
Google Fonts moved from a CSS @import to <link> tags with preconnect.
Catalogue page: the two static catalogue images and static genre list were replaced by the dynamic catalogue; genre links became filter buttons.
Stylesheet refactored to theme tokens (--surface, --heading, --link-text) so the same CSS powers both light and dark themes.
Page headers gained a theme toggle button; <main> elements gained an id for the skip link.

-Added
js/slideshow.js: previous/next buttons, clickable dots, keyboard arrows, swipe on touch screens, a caption with a "View details" link, and autoplay every 4.5 seconds.
Accessibility: the slideshow is a labelled carousel region, inactive slides are hidden from screen readers and the tab order, autoplay pauses on hover and keyboard focus and has a pause/play button, and visitors who set "reduce motion" in their system get no autoplay at all.
Without JavaScript the six posters appear as a simple grid instead.

-Removed
The static 6-poster collage styles (collage-6, hero-collage).
Homepage poster collages — 2026-10-27

-Changed
The first homepage collage (hero) is now a staggered grid of 6 posters: Attack on Titan, Demon Slayer, Naruto, Bleach, Spy x Family and My Hero Academia.
The second collage (Browse anime by genre section) is now a row of 4 posters: Steins;Gate, Death Note, Toradora! and KonoSuba.
Each poster links to its title page and has descriptive alt text. The hero posters load immediately; the second collage is lazy-loaded.
The old aniorbit-hero-collage and featured-anime-collage images are no longer used on the homepage.

--Part 2 — CSS styling and responsive design

-Added
Responsive images: a <picture> element with 480px/800px sources for the homepage hero, srcset and sizes on the three character images on anime.html, and loading="lazy" on below-the-fold images (news.html, anime.html).
Part 2 Details section in this README.

-Colour palette update 
Replaced the deep purple + cyan palette with Deep Midnight Blue (#0b132b) for the header, nav, footer, and hero, paired with a green accent inspired by the requested "venomous green" (#68ff14).
To avoid eye strain, the full-intensity green is now reserved for small details only (nav underline, hover states, focus rings), while a muted, deepened version (#3dbf2e) is used for larger surfaces like buttons — same hue family, softer at scale.
Removed leftover purple-tinted undertones from the neutral gray tokens (borders, muted text) so they sit cleanly against the new navy theme.

