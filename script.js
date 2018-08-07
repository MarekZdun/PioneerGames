$(document).ready(function() {
    let resizeTimer;
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(checkSize, 10);
    });

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

    let menuMobileVisible = false;
    $('#menu-icon').click(function() {
        if (menuMobileVisible) {
            $('header #header-inner nav ul').css({'display':'none'});
            menuMobileVisible = false;
            return;
        }
        $('header #header-inner nav ul').css({'display':'block'});
        menuMobileVisible = true;
    });
    $('header #header-inner nav ul').click(function() {
        if (menuMobileVisible){
            $(this).css({'display':'none'});
            menuMobileVisible = false;
        }
    });

    function checkSize() {
        if ($('#menu-icon').css('display') == 'none' ){
            $('header #header-inner nav ul').css({'display':'block'});
            menuMobileVisible = false;
        } else {
            $('header #header-inner nav ul').css({'display':'none'});
        }
    }

    checkSize();
});