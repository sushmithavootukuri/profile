$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });
});

$(document).ready(function () {
  $('ul.icon-menu > li')
    .click(function (e) {
      $('ul.icon-menu > li').removeClass('active');
      $(this).addClass('active');

    });
});

