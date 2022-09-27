// Бургер-меню
document.querySelector('#check-menu').addEventListener('click', () => {
    document.body.classList.toggle('_body-locked');
});

document.querySelectorAll('.header__burger-nav-link').forEach(element => {
    element.addEventListener('click', () => {
        document.getElementById('check-menu').checked = false;
        document.body.classList.remove('_body-locked');
    })
});

// Контроль input tel 
let inputTel = document.querySelectorAll('.tel');
inputTel.forEach(el => {
    el.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9\-()+]/g, '');
    });
})

// Выбор категорий
let typeSelect = document.querySelectorAll('.calc__type-block'),
viewSelect = document.querySelectorAll('.view-block');

typeSelect.forEach(elem => {
    elem.addEventListener('click', () => {
        document.querySelector('.type-active').classList.remove('type-active')
        elem.classList.add('type-active')
    })
});

viewSelect.forEach(elem => {
    elem.addEventListener('click', () => {
        document.querySelector('.view-active').classList.remove('view-active')
        elem.classList.add('view-active')
    })
});

// Range-slider
const rangeInput = document.querySelectorAll('.calc__square-range-input input'),
squareInputMax = document.querySelector('.calc__square-label input'),
progress = document.querySelector(".calc__square-slider .calc__slider-progress");

let sliderGap = 2;

squareInputMax.addEventListener('input', function (event) {
    setTimeout(() => {
        if (squareInputMax.value > 200) squareInputMax.value = 200;
        if (squareInputMax.value < 20) squareInputMax.value = 20;        
        
        progress.style.right = 100 - ((squareInputMax.value - 20) / rangeInput[1].max) * 100 + "%";    
        rangeInput[1].value = squareInputMax.value - 20;
    }, 1500);       
})

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        //Получаем значения слайдеров
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        // Выводы значений для сервера
        /* const minSquare = parseInt(rangeInput[0].value) + 20,
        maxSquare = parseInt(rangeInput[1].value) + 20; */

        if(maxVal - minVal < sliderGap) {
            if(e.target.className === "calc__square-range-min") { //Если активный слайдер левый
                rangeInput[0].value = maxVal - sliderGap;
            } else {
                rangeInput[1].value = minVal + sliderGap;
            }
        } else {
            squareInputMax.value = maxVal + 20;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

// Слайдер wlider

const sliderElem = document.querySelectorAll('.wslider__slider-elem'),
sliderBody = document.querySelector('.wslider__slider');

let count = 0,
width = sliderBody.offsetWidth;

const buttonNext = document.querySelector('.wslider__slider-next'),
buttonPrev = document.querySelector('.wslider__slider-prev');

// Кнопки слайдера wslider
buttonNext.addEventListener('click', () => {
    paginationIndicator[count].removeAttribute('status');
    count++;
    if (count >= sliderElem.length) {
        count = 0;
        paginationIndicator[2].removeAttribute('status');
        paginationIndicator[count].setAttribute('status', '1')
    } 
    sliderBody.style.transform = 'translate(-'+count*width/3+'px)';
    paginationIndicator[count].setAttribute('status', '1');
});

buttonPrev.addEventListener('click', () => {
    paginationIndicator[count].removeAttribute('status');
    count--;
    if (count < 0) {
        count = 0;
    }
    paginationIndicator[count].setAttribute('status', '1');
    sliderBody.style.transform = 'translate(-'+count*width/3+'px)';
});

// Пагинация для слайдера wlider

let paginationIndicator = document.querySelectorAll('.wslider__slider-indicator');

paginationIndicator[count].setAttribute('status', '1');

// Слайдер review

const revSliderElem = document.querySelectorAll('.review__slider-block'),
revSliderBody = document.querySelector('.review__slider-body');

let revCount = 0,
revWidth = revSliderBody.offsetWidth;

//Кнопки слайдера review

const revButtonNext = document.querySelector('.review__slider-next'),
revButtonPrev = document.querySelector('.review__slider-prev');

revButtonNext.addEventListener('click', () => {
    revCount++;
    if (revCount >= revSliderElem.length) {
        revCount = 0;
    } 
    revSliderBody.style.transform = 'translate(-'+revCount*width/3+'px)';
});

revButtonPrev.addEventListener('click', () => {
    revCount--;
    if (revCount < 0) {
        revCount = 0;
    }
    revSliderBody.style.transform = 'translate(-'+revCount*width/3+'px)';
});

// Аккордеоны

let accordion = document.querySelectorAll('.question__accordion');

accordion.forEach(elem => {
    let accordionContent = elem.nextElementSibling;
    elem.addEventListener('click', () => {
        if(accordionContent.style.maxHeight) {
            document.querySelectorAll('.question__content').forEach(el => el.style.maxHeight = null)
            elem.lastElementChild.style.transform = 'rotate(0deg) scaleX(1.8)'
        } else {
            document.querySelectorAll('.question__content').forEach(el => el.style.maxHeight = null)
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            elem.lastElementChild.style.transform = 'rotate(-180deg) scaleX(1.8)'
        }
    })
})