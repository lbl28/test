// script to hide nav bar before scrolling
(function ($) {
    $(document).ready(function(){
  
      // hide .navbar first
      $(".navbar").hide();
  
      // fade in .navbar
      $(function () {
          $(window).scroll(function () {
  
                   // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > 400) {
                  $('.navbar').fadeIn();
              } else {
                  $('.navbar').fadeOut();
              }
          });
      });
  
  });
    }(jQuery));

    