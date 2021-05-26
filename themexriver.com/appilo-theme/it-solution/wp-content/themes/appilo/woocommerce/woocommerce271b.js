(function($) {
    "use strict"; // Start of use strict

    if ($('.woocommerce-single-related-product').length){
        $('.woocommerce-single-related-product ul').addClass('owl-carousel')
    }
    if ($(".woocommerce-single-related-product").length) {
        $(".woocommerce-single-related-product ul").owlCarousel({
            mouseDrag: true,
            margin: 25,
            smartSpeed:300,
            loop:true,
            nav: false,
            navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
            responsive: {
                0 : {
                    items: 1
                },

                600 : {
                    items: 2,
                    center: false
                },

                992 : {
                    items: 3
                }
            }
        });
    }
})(window.jQuery);