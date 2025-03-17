document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu__toggle');
    const menu = document.querySelector('.menu__raw');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});