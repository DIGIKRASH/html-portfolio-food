$(".item").click(function () {
  $(".item-popup").toggleClass("active");
  $("html").toggleClass("fixed");
});

$(".item__close").click(function () {
  $(".item-popup").removeClass("active");
});

if ($(".item__title").height() > 50) {
  $(this).toggleClass("mini");
}

$(".item").each(function () {
  var $min = 30;
  if ($(this).find(".item__title").height() > $min) {
    $(this).find(".item__title").addClass("mini");
  }
});

$(".sidebar__list-item").click(function () {
  $(this).toggleClass("active");
});

$(".item__add-element").click(function () {
  $(this).toggleClass("active");
});

const btnUp = {
  el: document.querySelector(".btn-up"),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.add("show");
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.remove("show");
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener("scroll", () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
      if (scrollY > 10) {
        $(".sidebar").addClass("fixed");
      } else {
        $(".sidebar").removeClass("fixed");
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector(".btn-up").onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();


$('.item__popup-btn').click(function () {
  $(this).toggleClass('active');
});