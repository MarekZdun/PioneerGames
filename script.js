$(document).ready(function() {
    $('#button-home').click(function() {
        $('html,body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
    });
    $('#button-games').click(function() {
        $('html,body').animate({
            scrollTop: $("#games").offset().top
        }, 1000);
    });
    $('#button-contact').click(function() {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    var menuVisible = false;
    $('#menu-icon').click(function() {
      if (menuVisible) {
        $('header #header-inner nav ul').css({'display':'none'});
        menuVisible = false;
        return;
      }
      $('header #header-inner nav ul').css({'display':'block'});
      menuVisible = true;
    });
    $('header #header-inner nav ul').click(function() {
      $(this).css({'display':'none'});
      menuVisible = false;
    });
});