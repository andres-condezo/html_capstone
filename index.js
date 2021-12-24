// ***************
// mobile menu
// ***************

const menu = document.querySelector('#menu-container');
const closeButton = document.querySelector('.close-button');
const hamburger = document.querySelector('#hamburger-button');
const body = document.querySelector('body');
const anchors = document.querySelectorAll('.mobile-menu-ul li');
const maxCardsMobile = 2;

function openMenu() {
  menu.classList.add('visible');
  body.classList.add('overflow-hidden');
}

function closeMenu() {
  menu.classList.remove('visible');
  body.classList.remove('overflow-hidden');
}

hamburger.addEventListener('click', openMenu);
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

// *****************
// speakers-section
// *****************

const dataSpeakers = [
  {
    name: 'Miguel Ángel Durán',
    twitter: '@midudev',
    description: 'JavaScript programming developer, GitHub Star and Google Developer Expert',
    image: './img/minudev.png',
  },
  {
    name: 'Nuria Soriano',
    twitter: '@nuria_codes',
    description: 'Frontend category lead. I develop websites and sometimes video games.',
    image: './img/nuria-soriano.png',
  },
  {
    name: 'Maximilian Schwarzmüller',
    twitter: '@maxedapps',
    description: 'I teach & love coding: https://academind.com/courses',
    image: './img/maximilian.png',
  },
  {
    name: 'Fernando Herrera',
    twitter: '@Fernando_Her85',
    description: 'Full Stack developer and teacher.',
    image: './img/fernando-herrera.png',
  },
  {
    name: 'Oscar Barajas',
    twitter: '@gndx',
    description: 'Foundation Layer at @platzi. Microsoft MVP - Lead at Developer Circles from Facebook',
    image: './img/oscar-barajas.png',
  },
  {
    name: 'Jonathan Mircha',
    twitter: '@jonmircha',
    description: 'Professor. Web Programmer & Content Creator',
    image: './img/jhon-mircha.png',
  },
];

function createCard(el) {
  return `
  <figure class="img-container">
    <img src="./img/img-bg-1.png" alt="" class="bg-img"/>
    <img src="${el.image}" alt="${el.name} photo" class="speakers-img"/>
  </figure>
  <div class="speakers-text">
    <div class="speakers-title">${el.name}</div>
    <p class="speakers-subtitle">
      ${el.twitter}
    </p>
    <p class="speakers-par">
      ${el.description}
    </p>
  </div>
`;
}

const speakers = dataSpeakers.map((el, index) => {
  const article = document.createElement('article');
  article.className = 'speakers-card';
  if (index >= maxCardsMobile) {
    article.classList.add('desktopCard');
  }
  article.innerHTML = createCard(el);
  return article;
});

const speakersSection = document.getElementById('speakers');

for (let i = 0; i < speakers.length; i += 1) {
  speakersSection.appendChild(speakers[i]);
}

// *****************
// More-btn
// *****************

const moreBtn = document.getElementById('more-btn');

function showSpeakers() {
  const speakersCards = document.querySelectorAll('.speakers-card');

  for (let i = 0; i < speakersCards.length; i += 1) {
    if (i >= maxCardsMobile) {
      speakersCards[i].classList.toggle('desktopCard');
    }
  }

  if (speakersCards[3].classList.contains('desktopCard')) {
    moreBtn.innerHTML = 'More';
  } else {
    moreBtn.innerHTML = 'Less';
  }
}

moreBtn.addEventListener('click', showSpeakers);
