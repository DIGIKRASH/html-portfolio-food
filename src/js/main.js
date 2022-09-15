// Запуск функций при старте документа
$(document).ready(function () {

  // --- Hamburger
  // $('.hamburger').on('click', function () {
  //   $('.header').toggleClass('mobile');
  //   $('html').toggleClass('hidden');
  // })



  // --- Проверка валидации формы
  // $(document).ready(function () {
  //   $('#contact__form').submit(function (e) {
  //     e.preventDefault();

  //     var name = $('#contact__form-name').val();
  //     var email = $('#contact__form-email').val();

  //     $(".error").remove();
  //     $(".input-block").removeClass('input-error');

  //     setTimeout(function () {
  //       $('.error').remove();
  //     }, 5000);

  //     if (name.length < 1) {
  //       $('#contact__form-name').parent().addClass('input-error');
  //       $('#contact__form-name').after('<span class="error">Заполните поле</span>');
  //     }

  //     if (email.length < 1) {
  //       $('#contact__form-email').parent().addClass('input-error');
  //       $('#contact__form-email').after('<span class="error">Заполните поле</span>');
  //     } else {
  //       var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //       var validEmail = regEx.test(email);
  //       if (!validEmail) {
  //         $('#contact__form-email').parent().addClass('input-error');
  //         $('#contact__form-email').after('<span class="error">Заполните правильно</span>');
  //       }
  //     }
  //   });
  // });

})