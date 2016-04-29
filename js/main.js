$(window).ready(function () {
  $(".overlay").fadeOut(999);
  $(".preloadBG").each(function () {
    var t, n, r = $(this),
    i = r.css("background-image");
    i && (t = i.replace(/(^url\()|(\)$|[\"\'])/g, ""),
    n = new Image, n.src = t, n.complete && $(n).trigger("load"))
  });
});

var imgCount = $("img").length,
currentImgCount = 0;

$("img").load(function () {
  currentImgCount++;
  currentImgCount == imgCount && setTimeout(function () {
    /mobile/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
      $("img").unbind("load");
    },
    2e3)
  }).each(function () { this.complete && $(this).trigger("load") });
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
  $(window).ready(function() {
    $('.background').css('background-size','110%');
    $('.onload').addClass('active');
    $("html,body").animate({scrollTop: 0}, 100);
  });
