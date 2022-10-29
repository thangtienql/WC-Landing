(function( $ ){

    $('.hero-ss .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
    });

    AOS.init();

    $('.main-header .__toggle-btn').click( function() {
        // $(this).addClass('active');
        $('body').addClass('overplay');
        $('.__menu-mobile').addClass('active');
    });

    $('.__menu-mobile .close-icon').click( function() {
        $('body').removeClass('overplay');
        $('.__menu-mobile').removeClass('active');
    });

    $(document).mouseup(function(e) {
        if (!$(e.target).is(".__menu-mobile")) {
            $('body').removeClass('overplay');
            $('.__menu-mobile').removeClass('active');
        }
    });

 })( jQuery );