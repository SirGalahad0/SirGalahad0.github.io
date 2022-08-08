let i = 0;
let clickCount = 0;
document.querySelector('.hero__leave-button').addEventListener('click', () => {
    i += 60;
    document.querySelectorAll('.hero__animate-body').forEach(elem => {
        elem.style.transform = `rotate(${i}deg)`;
        document.querySelectorAll('.hero__img-body').forEach(pic => {
            pic.classList.add("active")
            pic.style.transform = `rotate(-${i}deg)`;
        });
    });
    if (i == 360) {
        document.querySelectorAll('.hero__animate-body').forEach(elem => {
            elem.style.transform = `rotate(${i}deg)`;
            document.querySelectorAll('.hero__img-body').forEach(pic => {
                pic.classList.add("active")
                pic.style.transform = `rotate(-${i}deg)`;
            });
        });
        i = i - 360;
        setTimeout(() => {
            document.querySelector('.hero__animate-body').classList.add('aactive');
            document.querySelectorAll('.hero__img-body').forEach(pic => {
                pic.classList.add('aactive');
            });
            document.querySelector('.hero__animate-body').style.transform = `rotate(${i}deg)`;
            document.querySelectorAll('.hero__img-body').forEach(pic => {
                pic.style.transform = `rotate(-${i}deg)`;
            });
            setTimeout(() => {
                document.querySelector('.hero__animate-body').classList.remove('aactive');
                document.querySelectorAll('.hero__img-body').forEach(pic => {
                    pic.classList.remove('aactive');
                });
            }, 10);
        }, 1000);
    }
});

document.querySelector('.hero__video-button').addEventListener('click', () => {
    let video = document.querySelector('.hero__video-checked');
    let content = document.querySelector('.hero__video-content');
    content.classList.add('_video-content_hidden');
    video.classList.add('_video-active');
    document.body.classList.add('_body-locked');
    
    document.querySelector('.hero__video-checked-button').addEventListener('click', () => {
        video.classList.remove('_video-active');
        document.body.classList.remove('_body-locked');
        content.classList.remove('_video-content_hidden');
    })
    if (video.classList.contains('_video-active')) {
        document.addEventListener('keydown', function (event) {
            if (event.key == 'Escape') {
                video.classList.remove('_video-active');
                document.body.classList.remove('_body-locked');
                content.classList.remove('_video-content_hidden');
            }
        })
    }
})

const ecoSystem = document.querySelector('.ecosystem__content');

ecoSystem.addEventListener('click', function (event) {
    if (event.target.closest('span')) {
        const dollar = document.createElement('div');
        dollar.innerHTML = '$$';
        dollar.className = 'dollar';
        event.target.closest('span').append(dollar);
        setTimeout(() => {
            event.target.closest('span').querySelector('div').remove();
        }, 300);
    }        
})
ecoSystem.addEventListener('mousedown', function (event) {
    if (event.target.closest('span')) {
        event.preventDefault();
    }        
})

document.querySelector('#check-menu').addEventListener('click', () => {
    document.body.classList.toggle('_body-locked');
})

document.querySelectorAll('.header__burger-nav-link').forEach(element => {
    element.addEventListener('click', () => {
        document.getElementById('check-menu').checked = false;
        document.body.classList.remove('_body-locked');
    })
})