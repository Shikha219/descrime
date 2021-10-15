const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.nav-menu');
const icon = document.querySelector('#icon');


menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
});

icon.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        icon.src = "images/moon.png"
    } else {
        icon.src = "images/sun.png"

    }
});