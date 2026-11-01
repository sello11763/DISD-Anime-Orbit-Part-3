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

