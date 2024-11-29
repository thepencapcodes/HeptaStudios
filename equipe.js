const navbarEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        navbarEl.classList.add('navbar-scrolled');
    } else if (window.scrollY <= 600) {
        navbarEl.classList.remove('navbar-scrolled');
    }
});


new Swiper('.card-wrapper', {
    loop: false,
    spaceBetween: 30,
  
    // pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });