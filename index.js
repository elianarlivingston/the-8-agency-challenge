import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Menu
const $btn = document.getElementById('btn')
const $sidebar = document.getElementById('sidebar')

const toggle = (element, className) => (element.classList.toggle(className))

const handlerClick = () => toggle($sidebar, 'is-hidden')

$btn.addEventListener('click', handlerClick)
$sidebar.addEventListener('click', handlerClick)

// Form
const $form = document.getElementById('form')

$form.addEventListener('submit', event => {
    event.preventDefault()
})

