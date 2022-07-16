new Swiper('.slider-body', {
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: true,
    },
    
});

document.querySelector('.burger').addEventListener('click', () => {

    document.querySelector('.burger').classList.toggle('_burger-pos')
    let burgerSpan = document.querySelectorAll('.burger__line');
    burgerSpan.forEach(element => {
        element.classList.toggle('_burger-active');
    });

    let mobileMenu = document.querySelector('.header__mobile');
    let header = document.querySelector('.header');
    mobileMenu.classList.toggle('_active');
    document.body.classList.toggle('_locked');
    header.classList.toggle('_header-color');
});