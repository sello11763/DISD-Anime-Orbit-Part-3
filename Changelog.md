# Part 1 improvements and changes

Fixed
index.html: 8 <section> tags were opened but only 2 closed, leaving six homepage sections nested inside one another; all sections are now balanced and properly closed.
news.html: 4 <section> tags opened, only 2 closed (Latest Reviews and Trending were left open); now balanced.
anime.html: the id="catalogue" section was never closed, and a stray </main> tag was sitting inside <header> with no matching opening tag; both fixed, and the character spotlight is now its own properly closed section.
enquiry.html: a duplicate </main> closing tag (closed twice in a row) was removed.
about.html: the last nav <li> was missing its closing > (</li with no bracket); fixed.
Removed a duplicate <h1> per page — the header brand name ("AniOrbit") is no longer marked up as a heading, so each page now has exactly one <h1> (the page title).

Added
External stylesheet (css/style.css) linked from every page, replacing all inline style attributes.
js/main.js placeholder, reserved for Part 3 functionality work.
Horizontal navigation menu with a pure-CSS mobile toggle (no JavaScript dependency), consistent across all six pages.
<meta charset="UTF-8">, <meta name="viewport">, and a meta description added to every page (previously missing on all of them).
Descriptive alt text on every image site-wide (previously missing on index.html, about.html, news.html, contact.html, and enquiry.html).
A contact form (name, email, subject, message) on contact.html, which previously had contact details only.
images/README.txt documenting the folder rename and listing every image filename the site expects.