$(window).ready(function () {
  $(".preloadBG").each(function () {
    var t, n, r = $(this),
    i = r.css("background-image");
    i && (t = i.replace(/(^url\()|(\)$|[\"\'])/g, ""),
    n = new Image, n.src = t, n.complete && $(n).load(function(){
      $(".overlay").fadeOut(333);      
      $('.background').css('background-size','110%');
      $('.onload').addClass('active');
      $("html,body").animate({scrollTop: 0}, 100);
    }));
  });
});


$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop(),
  percentage = scrolled / $(document).height();
  $('.background').css('background-position','center ' + -((percentage * 15) - 50)+'%');
}

$("html,body").scrollTop(0);
