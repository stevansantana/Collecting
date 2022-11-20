const btn = document.getElementsByClassName('menu-toggle')[0]
const mobile_menu = document.querySelector('nav')

btn.addEventListener('click', () => {
    mobile_menu.classList.toggle('open')
})