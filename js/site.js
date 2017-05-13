'use strict';

// Divider animation
$('#about .divider').addClass('is-showing');
$(window).scroll(function() {
    // Window is scrolling
    var wScroll = $(this).scrollTop();
    if (wScroll + 500 > $('#mission').offset().top) {
        $('#mission .divider').addClass('is-showing');
    }
    if (wScroll + 500 > $('#methodology').offset().top) {
        $('#methodology .divider').addClass('is-showing');
    }
    if (wScroll + 500 > $('#ideology').offset().top) {
        $('#ideology .divider').addClass('is-showing');
    }
});

// jQuery scroll to
// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
