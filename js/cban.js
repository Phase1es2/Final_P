
const menu_box = document.querySelector('.menu-box');
const menu_button = document.querySelector('.menu-button');


menu_button.addEventListener('click', function () {
    menu_box.classList.toggle('active');
})