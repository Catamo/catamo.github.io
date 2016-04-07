$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop(),
      percentage = scrolled / $(document).height();
      $('.background').css('background-position','center ' + -((percentage * 15) - 50)+'%');
}

$("html,body").scrollTop(0);
$(window).ready(function() {
  $('.background').css('background-size','110%');
  $('.onload').addClass('active');
  $("html,body").animate({scrollTop: 0}, 100);
});
