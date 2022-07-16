new Swiper('.slider-body', {
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: true,
    },
    
});

document.querySelector('.burger').addEventListener('click', () => {

    let burgerSpan = document.querySelectorAll('.burger__line');
    burgerSpan.forEach(element => {
        element.classList.toggle('_burger-active');
    });
    let mobileMenu = document.querySelector('.header__mobile');
    let header = document.querySelector('.header');
    mobileMenu.classList.toggle('_active');
    document.body.classList.toggle('_locked');
    header.classList.toggle('_header-color');


    document.querySelectorAll('.header__mobile-link').forEach(element => {
        element.addEventListener('click', () => {
            burgerSpan.forEach(element => {
                element.classList.remove('_burger-active');
            });
            mobileMenu.classList.remove('_active');
            document.body.classList.remove('_locked');
            header.classList.remove('_header-color');
        })
    });
});
 