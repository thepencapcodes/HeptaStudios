const navbarEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        navbarEl.classList.add('navbar-scrolled');
    } else if (window.scrollY <= 600) {
        navbarEl.classList.remove('navbar-scrolled');
    }
});
