const header = document.querySelector('.header');
const navToggler = document.querySelector('.nav-menu-toggler');
const navContainer = document.querySelector('.nav-menu ul');
const navOpen = document.querySelector('.hamburger-open');
const navClose = document.querySelector('.hamburger-close');
const navLinks = document.querySelectorAll('.nav-menu ul li');


// navigation 
let isNavOpen = false;

function openNav() {
    navContainer.classList.add('open');
    navOpen.classList.add('d-none');
    navClose.classList.remove('d-none');
    isNavOpen = true;
}

function closeNav() {
    navContainer.classList.remove('open');
    navOpen.classList.remove('d-none');
    navClose.classList.add('d-none');
    isNavOpen = false;
}

navToggler.addEventListener('click', () => {
    navContainer.classList.toggle('open');
    if (!isNavOpen) {
        openNav();
    } else {
        closeNav();
    }
});

// Close nav when click any link 
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        closeNav();
    });
});


// Show and hide nav in onScroll 
let prevScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    let currScroll = window.pageYOffset;

    if (prevScroll > currScroll) {
        header.classList.add('header-active');
    } else {
        header.classList.add('header-scrolled');
        header.classList.remove('header-active');
    }

    prevScroll = currScroll;
});

