// Copyright year update.
const copyYearEl = document.querySelector('.year');
copyYearEl.textContent = new Date().getFullYear();

// Mobile Nav

const navBtnEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

navBtnEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
});

