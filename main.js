'use strict';

// Make navbar trasparent when it is on the top.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener(
    'scroll', () => {
        console.log(window.scrollY)
        console.log('navbarHeight: ${navbarHeight}');
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('navbar--dark');
        } else {
            navbar.classList.remove('navbar--dark');
        }
    });

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
});

// Navbar toggle button for small screen

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})

// Handle scrolling when tapping contact me button
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    const scrollTo = document.querySelector('#contact');
    scrollTo.scrollIntoView({ behavior: 'smooth' });
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// Projects button

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 400);

});