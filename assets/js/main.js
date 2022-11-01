(function( $ ){

    $('.hero-ss .owl-carousel').owlCarousel({
        items: 1,
        // loop: true,
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

    $(window).scroll( function() {
        let height_header = $('.main-header').outerHeight();

        if( $(window).scrollTop() > height_header ){
            $('.main-header').addClass('scroll');
        }else{
            $('.main-header').removeClass('scroll');
        }
    });

    $(document).mouseup(function(e) {
        if (!$(e.target).is(".__menu-mobile")) {
            $('body').removeClass('overplay');
            $('.__menu-mobile').removeClass('active');
        }
    });

    $('a[href*=\\#]:not([href=\\#])').on('click', function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top)
                }, 700);
                return false;
            }
        }
    });

 })( jQuery );