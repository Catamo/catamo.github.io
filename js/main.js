$(window).ready(function () {
  $(".preloadBG").each(function () {
    var t, n, r = $(this),
    i = r.css("background-image");
    i && (t = i.replace(/(^url\()|(\)$|[\"\'])/g, ""),
    n = new Image, n.src = t, $(n).load(function(){
      $(".overlay").hide();
      $('.background').css('background-size','110%');
      $('.onload').addClass('active');
      $('nav').addClass('top');
      $("html,body").animate({scrollTop: 0}, 100);
    }),
    n.complete && $(n).trigger("load")
  );
});
});

$('a[href*="#"]:not([href="#"])').click(function(ev) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      ev.preventDefault();
      if (this.hash == "#Top") {
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
        return;
      }

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });

function parallax(){
  var scrolled = $(window).scrollTop(),
  percentage = scrolled / $(document).height();
  $('.background').css('background-position','center ' + -((percentage * 15) - 50)+'%');
}

$("html,body").scrollTop(0);

// Hide Header on on scroll down
 var didScroll;
 var lastScrollTop = 0;
 var delta = 5;
 var navbarHeight = $('.nav').outerHeight();

 $(window).scroll(function(event){
   didScroll = true;
   parallax();
 });

 setInterval(function() {
   if (didScroll) {
     hasScrolled();
     didScroll = false;
   }
 }, 200);

 function hasScrolled() {
   var st = $(this).scrollTop();

   // Make sure they scroll more than delta
   if(Math.abs(lastScrollTop - st) <= delta)
   return;

   if (lastScrollTop == $(document).scrollTop()){
       $('nav').addClass('top');
   } else {
       $('nav').removeClass('top');
   }

   // If they scrolled down and are past the navbar, add class .nav-up.
   // This is necessary so you never see what is "behind" the navbar.
   if (st > lastScrollTop && st > navbarHeight){
     // Scroll Down
       $('nav').removeClass('up').addClass('down');
   } else {
     // Scroll Up
     if(st + $(window).height() < $(document).height()) {
     $('nav').removeClass('down').addClass('up');
     }
   }

   lastScrollTop = st;
 }
