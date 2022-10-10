$(".item").click(function () {
  $(".item-popup").toggleClass("active");
});

$(".item__close").click(function () {
  $(".item-popup").removeClass("active");
});

if ($(".item__title").height() > 50) {
  $(this).toggleClass("mini");
}

$(".item").each(function () {
  var $min = 30;
  if ($(this).find('.item__title').height() > $min) {
    $(this).find('.item__title').addClass("mini");
  }
});

$('.sidebar__list-item').click(function () {
  $(this).toggleClass('active');
});

$('.item__add-element').click(function () {
  $(this).toggleClass('active');
});