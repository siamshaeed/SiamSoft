// for up arrow
$(document).ready(function () {
    var offset = 350;
    var duration = 500;
    var time = 1500;
    $(window).scroll (function () {
        if ($(window).scrollTop() > offset) {
            $('.scroll-top').fadeIn(duration);
        }
        else {
            $('.scroll-top').fadeOut(duration);
        }
    });
    $('.scroll-top').click(function () {
        $('html,body').animate({scrollTop: 0},time)

    });
});

// owl plaguin

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })
})


// for up arrow

$(document).ready(function () {
    var offset = 250;
    var duration = 500;
    var time = 1500;
    $(window).scroll (function () {
        if ($(window).scrollTop() > offset) {
            $('.scroll-top').fadeIn(duration);
        }
        else {
            $('.scroll-top').fadeOut(duration);
        }
    });
    $('.scroll-top').click(function () {
        $('html,body').animate({scrollTop: 0},time)

    });
});

