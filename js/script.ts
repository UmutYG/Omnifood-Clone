// Copyright year update.
const copyYearEl = document.querySelector('.year') as HTMLSpanElement;
copyYearEl.textContent = new Date().getFullYear().toString();

// Mobile Nav

const navBtnEl = document.querySelector('.btn-mobile-nav')!;
const headerEl = document.querySelector('.header')!;

navBtnEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
});

// Sticky nav

const observer = new IntersectionObserver(
    (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting) {
            document.body.classList.add('sticky');
        }

        if (entry.isIntersecting) {
            document.body.classList.remove('sticky');
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: '-80px'
    }
);

const sectionHeroEl = document.querySelector('.section-hero') as HTMLElement;

observer.observe(sectionHeroEl);
