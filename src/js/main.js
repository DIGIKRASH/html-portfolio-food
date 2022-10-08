$('.item').click(function () {
  $('.item-popup').toggleClass('active');
});

$('.item__close').click(function () {
  $('.item-popup').removeClass('active');
});

