(function($) {

  // $(document).ready(function() {
  //   $('body').niceScroll();
  // });

  $('.header-menu__btn').on('click', function() {
    $(this).toggleClass('active');
    $('.header-menu__list').stop(true, true).slideToggle(500);
    // $('.header-menu__list').toggleClass('active');
  });

})(jQuery);

// $(document).ready(function() {
//   $('.header-menu__btn').click(function() {
//     $(this).toggleClass('open');
//     $('.header-menu__list').stop(true, true).slideToggle(500);
//   });
// });