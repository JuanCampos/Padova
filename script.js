window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.container-navbar');
    const navbarOffsetTop = navbar.offsetTop;

    if (window.pageYOffset > navbarOffsetTop) {
        navbar.classList.add('fixed-navbar');
    } else {
        navbar.classList.remove('fixed-navbar');
    }
});

document.querySelector('.fa-bars').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});