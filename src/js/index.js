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
  let data = document.querySelector('.calculator__select').value;
  document.querySelector('.calculator__out-2').innerHTML = data;
})