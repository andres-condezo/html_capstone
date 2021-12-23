// ***************
// mobile menu
// ***************

const menu = document.querySelector('#menu-container');
const closeButton = document.querySelector('.close-button');
const hamburguer = document.querySelector('#hamburguer-button');
const body = document.querySelector('body');
const anchors = document.querySelectorAll('.mobile-menu-ul li');

function openMenu() {
  menu.classList.add('visible');
  body.classList.add('overflow-hidden');
}

function closeMenu() {
  menu.classList.remove('visible');
  body.classList.remove('overflow-hidden');
}

hamburguer.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
anchors.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

//* **************
// sticky menu
//* **************

const header = document.getElementById('header');
const sticky = header.offsetTop;

function stickMenu() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.onscroll = () => { stickMenu(); };
