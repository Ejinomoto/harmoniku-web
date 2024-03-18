// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

const hamburger = document.querySelector('#burger');
const closeBtn = document.querySelector('#close');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
    navMenu.classList.toggle('hidden');
});

closeBtn.addEventListener('click', function() {
    closeBtn.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    navMenu.classList.toggle('hidden');
});
