"use strict";

const anchors = document.querySelectorAll('.anchor');

anchors.forEach( anchor => {
    anchor.addEventListener('click', ()=> {
        anchor.classList.toggle('arrow__rotate')
    })
})
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


// section animation

AOS.init();