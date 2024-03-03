let slug = location.pathname; //.split("/").slice(1);
let currentLinks = document.querySelectorAll('a[href="' + slug + '"]');
currentLinks.forEach((link) => (link.className += " current"));
