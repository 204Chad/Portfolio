'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});



// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

// Move to Contact section when click Contact me button on the home
const HomeContactBtn = document.querySelector('.home__contact');
HomeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}


// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    projectContainer.classList.add('animation-out');
    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('animation-out');

    }, 300);
});


// make hold work category button
const categoryBtn = document.querySelectorAll('.category__btn');
workBtnContainer.addEventListener('click', (e) => {
    const btnFilter = e.target.dataset.filter;
    categoryBtn.forEach((selected) => {
        if (btnFilter == null) {
            return;
        } else if (btnFilter === selected.dataset.filter) {
            selected.classList.add('active');
        } else {
            selected.classList.remove('active');
        }
    });
});
