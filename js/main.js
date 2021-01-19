$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


// // Scroll To Top Button 
// var scrollButton = $(".scroll-top");
// $(window).scroll(function() {
//     ($(this).scrollTop() >= 500) ? scrollButton.show(600): scrollButton.hide(600);
// });
// // Click Button to scroll top 
// scrollButton.click(function() {
//     $("html,body").animate({ scrollTop: 0 }, 600);
// });



var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();



$(document).ready(function() {


    //Main Slider Carousel
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 20,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });

    $(".quan-down").on('click', function() {
        var value = $(this).siblings(".quan-input").val();
        value--;
        $(this).siblings(".quan-input").val(value);
    })
    $(".quan-up").on('click', function() {
        var value = $(this).siblings(".quan-input").val();
        value++;
        $(this).siblings(".quan-input").val(value);
    })

    $('.offers .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        stagePadding: 5,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 2,
                // margin: 20,
            },
            600: {
                items: 3,
            },
            720: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 4,
            }
        }
    });


    // This is To Open search Box
    $(".search").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box").slideDown(300);
    });

    $(".search").click(function() {
        $(".search .search-icon").removeClass("open-search")
        $(".search .search-icon").addClass("close-search")
        $(".close-search-btn").fadeIn(500)
        $(".search-box").fadeIn(500);
    });

    $(".close-search-btn,.overlay-box").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box").slideUp(500);
    });

    $(".close-search-btn,.overlay-box").click(function() {
        $(".search .search-icon").addClass("open-search")
        $(".search .search-icon").removeClass("close-search")
        $(".close-search-btn").fadeOut(300)
        $(".search-box").fadeOut(300);
    });


    //This is to Open Side Menu in Small Screens
    $(".menu").click(function() {
        $("body").addClass("overflow")
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".mo-nav").addClass("menu-open");
        $(".overlay-box2").fadeIn(500);
    });

    $(".toabout,.tooffers,.close,.overlay-box2").click(function() {
        $("body").removeClass("overflow")
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".mo-nav").removeClass("menu-open");
        $(".overlay-box2").fadeOut(500);
    });

    if ($(window).width() <= 991) {
        $(".lang-name").click(function() {
            $(".lang-name").toggleClass("rotate")
            $(".lang-list").slideToggle(300);
        });
    }
    $(".sub-box .nav-link").click(function() {
        $(this).toggleClass("rotate")
        $(this).siblings(".config-list").slideToggle(300);
    });


    $(".toabout").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-us").offset().top
        }, 500);
    });
    $(".tooffers").click(function() {
        $('html, body').animate({
            scrollTop: $("#offers").offset().top
        }, 500);
    });
});