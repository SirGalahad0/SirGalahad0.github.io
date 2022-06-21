var time = 2,
cc = 1;
$(window).scroll(function() {
$('.statistic__description').each(function() {
  var
    cPos = $(this).offset().top,
    topWindow = $(window).scrollTop();
  if (cPos < topWindow + 300) {
    if (cc < 2) {
      $(".statistic__figcap").addClass("viz");
      $('figcaption').each(function() {
        var
          i = 1,
          num = $(this).data('num'),
          step = 1000 * time / num,
          that = $(this),
          int = setInterval(function() {
            if (i <= num) {
              that.html(i);
            } else {
              cc = cc + 2;
              clearInterval(int);
            }
            i++;
          }, step);
      });
    }
  }
});
});

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.querySelector('.calculator__sub').addEventListener('click', () => {
  let dataType = parseInt(document.querySelector('.type-select').value);
  let dataDesign = parseInt(document.querySelector('.design-select').value);
  let dataAdaptability = parseInt(document.querySelector('.adaptability-select').value);
  const cost = dataType + dataDesign + dataAdaptability;
  if (Number.isNaN(cost) == true) {
    document.querySelector('.calculator__out-2').innerHTML = 'Введите корректные параметры !'
  } else {
    document.querySelector('.calculator__out-2').innerHTML = `Стоимость: ${cost}` + ` рублей`;
  }
});

let popupTime = setTimeout(() => {
  let popup = document.querySelector('.popup');
  popup.classList.add('_active');
}, 45 * 1000
);

document.querySelector('.popup__cancel').addEventListener('click', () => {
  let popup = document.querySelector('.popup');
  popup.classList.remove('_active');
});

let clientWidth = window.innerWidth;
if (clientWidth <= 1024) {
  clearTimeout(popupTime);
};

window.onload = function() {
  setTimeout(() => {
    document.getElementById('preloader').style.display = "none";
    document.body.classList.remove('_locked');
    let wrapper = document.querySelector('.wrapper');
    wrapper.style.display = "flex";
  }, 15 * 1000);
};