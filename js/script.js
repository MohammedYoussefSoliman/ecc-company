"use strict";

const anchors = document.querySelectorAll('.anchor');
const header = document.getElementById('header');

anchors.forEach( anchor => {
    anchor.addEventListener('click', ()=> {
        anchor.classList.toggle('arrow__rotate')
    })
})

// navbar scroll

const scrollHeader = () => {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 300) {
        header.classList.add('pages');
      } else {
        header.classList.remove('pages');
      }
}

window.onscroll =scrollHeader;

// mobile nav

const mobileMenu = document.querySelector('.toggle--mobile--nav');
const closeMenu = document.querySelector('.close--anchor');
const aside = document.querySelector('.mobile--aside');

mobileMenu.addEventListener('click', (e)=> {
    e.preventDefault();
    aside.classList.toggle('open')
})

closeMenu.addEventListener('click', (e)=> {
    e.preventDefault();
    aside.classList.remove('open')
})

// hero carsoul

$('.ecc--hero--list').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    smartSpeed:3000
});

$('.about--carousel').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    pagination: false,
    dots: false,
    nav: true,
    smartSpeed :900,
    navText : ["<img draggable='false' src='./images/icons/slider_left_arrow.svg'>","<img draggable='false' src='./images/icons/slider_right_arrow.svg'>"]
});

$('.services--list').owlCarousel({
    items:1,
    loop:true,
    pagination: false,
    dots: false,
    nav: true,
    margin: 32,
    mouseDrag: true,
    responsive:{
        600:{
            items:1,
        },
        700:{
            items:2,
        },
    },
    navText : ["<img draggable='false' src='./images/icons/slider_left_arrow.svg'>","<img draggable='false' src='./images/icons/slider_right_arrow.svg'>"]
});


// section animation

AOS.init();