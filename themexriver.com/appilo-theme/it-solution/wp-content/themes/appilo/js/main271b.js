( function( $ ) {
    "use strict";
    var t = {
        init: function () {
            this.Basic.init();
        },
        Basic: {
            init: function () {
                    this.ImageAnimation(),
                    this.ImageDataAnimation(),
                    this.ImageHoverAnimation(),
                    this.MegaMenuMobile(),
                    this.RandomOptions(),
                    this.InViewAnimation();
            },
            MegaMenuMobile: function (){
                $(window).on('load', function() {
                    if($(window).width() < 991) {
                        $('.htmegamenu-content-wrapper').addClass('dropdown-menu');
                    }
                });
                if($('.tmx-mega-menu').length){
                    $('li.tmx-mega-menu').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
                    $('li.tmx-mega-menu .dropdown-btn').on('click', function() {
                        $(this).prev('.htmegamenu-content-wrapper').slideToggle(500);
                    });
                }
            },
            ImageAnimation: function () {
                $(".man-updown .elementor-image").css("animation", "man-updown 2s infinite alternate");
                $(".IT_animation_1 .elementor-image").css("animation", "IT_animation_1 12s infinite linear alternate");
                $(".IT_animation_2 .elementor-image").css("animation", "IT_animation_2 12s infinite linear alternate");
                $(".IT_animation_3 .elementor-image").css("animation", "IT_animation_3 12s infinite linear alternate");
                $(".IT_animation_4 .elementor-image").css("animation", "IT_animation_4 12s infinite linear alternate");
                $(".IT_animation_5 .elementor-image").css("animation", "IT_animation_5 12s infinite linear alternate");
                $(".rotate-anim .elementor-image").css("animation", "rotate-anim 3s infinite linear");
                $(".icon-bounce .elementor-image").css("animation", "icon-bounce 0.8s ease-out infinite");
            },
            ImageHoverAnimation: function () {
                $('.flip-animation').hover(
                    function(){ $(this).addClass('flip-animations') },
                    function(){ $(this).removeClass('flip-animations') }
                )
            },
            ImageDataAnimation: function () {
                var x1 = $('.it-data-animation-1 .elementor-image');
                var x2 = $('.it-data-animation-2 .elementor-image');
                var x3 = $('.it-data-animation-3 .elementor-image');
                var x4 = $('.it-data-animation-4 .elementor-image');

                x1.attr('data-parallax', '{"x" : -70}');
                x2.attr('data-parallax', '{"y" : -70}');
                x3.attr('data-parallax', '{"y" : 70}');
                x4.attr('data-parallax', '{"y" : -50}');
            },
            InViewAnimation: function () {
                $(window).on('scroll', function() {
                    $(".js-inview-animation .elementor-image").each(function(i, el) {
                        var el = $(el);
                        if (el.visible(true)) {
                            el.addClass("now-in-view");
                        } else {
                            el.removeClass("now-in-view");
                        }
                    });
                });
           },
            RandomOptions: function () {
                if ($('.osaas-tilt-animation .elementor-image').length) {
                    var tilt_selector = $('.osaas-tilt-animation .elementor-image');

                    tilt_selector.attr('data-tilt', '');
                    tilt_selector.attr('data-tilt-max', 8);
                    tilt_selector.tilt({
                        glare: true,
                        maxGlare: .5
                    });
                }
            },
        },
    };
    jQuery(document).ready(function () {
        t.init();
        console.log('appilo core main js loaded');
    });

} )( jQuery );