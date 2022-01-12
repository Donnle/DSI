const burger = document.querySelector('.header-burger')
const menu = document.querySelector('.header-menu-list')
const icons = document.querySelector('.header-icons')

burger.addEventListener('click', () => {
   menu.classList.toggle('active')
   icons.classList.toggle('active')
})