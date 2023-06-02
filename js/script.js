// Copyright year update.
var copyYearEl = document.querySelector('.year');
copyYearEl.textContent = new Date().getFullYear().toString();
// Mobile Nav
var navBtnEl = document.querySelector('.btn-mobile-nav');
var headerEl = document.querySelector('.header');
navBtnEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
});
var allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        var href = link.getAttribute("href");
        // Close mobile naviagtion
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});
// Sticky nav
var observer = new IntersectionObserver(function (entries) {
    var entry = entries[0];
    if (!entry.isIntersecting) {
        document.body.classList.add('sticky');
    }
    if (entry.isIntersecting) {
        document.body.classList.remove('sticky');
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
});
var sectionHeroEl = document.querySelector('.section-hero');
observer.observe(sectionHeroEl);
