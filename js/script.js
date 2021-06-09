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



//Resume section
let skillsBtn = document.getElementById("skills-btn");
let experienceBtn = document.getElementById("experience-btn");
let achievementsBtn = document.getElementById("achievements-btn");


let skillsSection = document.getElementById("skills");
let experienceSection = document.getElementById("experience");
let achievementsSection = document.getElementById("achievements");


skillsBtn.onclick = () => {

  skillsSection.classList.remove("hide-section");
  experienceSection.classList.add("hide-section");
  achievementsSection.classList.add("hide-section");

  skillsBtn.classList.add("active");
  experienceBtn.classList.remove("active");
  achievementsBtn.classList.remove("active");
}

experienceBtn.onclick = () => {

  skillsSection.classList.add("hide-section");
  experienceSection.classList.remove("hide-section");
  achievementsSection.classList.add("hide-section");

  skillsBtn.classList.remove("active");
  experienceBtn.classList.add("active");
  achievementsBtn.classList.remove("active");
}

achievementsBtn.onclick = () => {

  skillsSection.classList.add("hide-section");
  experienceSection.classList.add("hide-section");
  achievementsSection.classList.remove("hide-section");

  skillsBtn.classList.remove("active");
  experienceBtn.classList.remove("active");
  achievementsBtn.classList.add("active");
}