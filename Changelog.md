-Removed
The tools/ folder (a Python image script and a Node.js page generator). The brief only asks for HTML, CSS and JavaScript, so the project no longer needs Python or Node.js. The 18 pages in titles/ and sitemap.xml stay as they were; to add a title, add it to js/data.js, copy an existing file in titles/, and add the new address to sitemap.xml.

-Added
images/posters/*-300.webp: 13 small copies of the posters (300 px wide), used with srcset/sizes and <picture> so phones download smaller images. posterW in js/data.js records which titles have one.

-Changed
Removed the srcset on the three character images in anime.html, because it pointed at resized copies that only the removed script created.
Image names are now renamed by hand; the list is in images/README.txt.