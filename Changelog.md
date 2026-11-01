-Removed
The tools/ folder (a Python image script and a Node.js page generator). The brief only asks for HTML, CSS and JavaScript, so the project no longer needs Python or Node.js. The 18 pages in titles/ and sitemap.xml stay as they were; to add a title, add it to js/data.js, copy an existing file in titles/, and add the new address to sitemap.xml.

-Added
images/posters/*-300.webp: 13 small copies of the posters (300 px wide), used with srcset/sizes and <picture> so phones download smaller images. posterW in js/data.js records which titles have one.

-Changed
Removed the srcset on the three character images in anime.html, because it pointed at resized copies that only the removed script created.
Image names are now renamed by hand; the list is in images/README.txt.

--Homepage hero slideshow 
-Changed
The first homepage collage (hero) is now a poster slideshow. The centre poster is the active slide, with the previous and next posters peeking in at the sides. It uses the same six posters: Attack on Titan, Demon Slayer, Naruto, Bleach, Spy x Family and My Hero Academia. The second collage (four posters in the genre section) is unchanged.

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