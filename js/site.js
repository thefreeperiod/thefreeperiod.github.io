'use strict';

$('#mission .divider').addClass('is-showing');
$(window).scroll(function() {
    // Window is scrolling
    var wScroll = $(this).scrollTop();
    if (wScroll + 500 > $('#about').offset().top) {
        $('#about .divider').addClass('is-showing');
    }
});