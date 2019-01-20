(function(jQuery) {
    "use strict";
    $(window).on('load', function() {
        $('.load-popup').fadeIn(5000);
    });
    
    $(document).ready(function() {

        /*====================================
        // menu-fix
        ======================================*/

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.menu-header').addClass("affix");
            } else {
                $('.menu-header').removeClass("affix");
            }
        });

        /*====================================
        // close popup
        ======================================*/
        $('.close-icon').on('click', function() {
            $('.load-popup, .gunaso').fadeOut(200);
            $('.popup-icon').fadeIn();
        });
        /*====================================
        // gunaso popup
        ======================================*/
        $('.gunaso-link').on('click', function (e) {
            e.preventDefault();
            $('.gunaso').fadeIn();
        });

        /*====================================
        // popup icon
        ======================================*/
        $('.popup-icon').on('click', function() {
            $('.load-popup').fadeIn(200);
            $('popup-icon').fadeOut();
        })





        jQuery('.master-head  .page-toggle-button .hamburger-box').on('click', function() {
            jQuery('.master-head .menu').toggleClass('menu-open');

        });
        jQuery('.master-head  .menu .close-toggle').on('click', function() {
            jQuery('.master-head .menu').removeClass('menu-open');

        });

        var jQuerywinwidth = jQuery(window).width();
        if (jQuerywinwidth <= 1024) {
            jQuery('.menu ul li.menu-item-has-children').prepend('<span class="fa fa-angle-down"></span>');

            jQuery('.menu ul li.menu-item-has-children span.fa-angle-down').on('click', function(e) {
                e.preventDefault();

                jQuery(this).siblings('.menu ul li.menu-item-has-children ul').slideToggle(300);

            })
        }



        /*====================================
        // hero carousel
        ======================================*/

        $('.hero-slider').owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin: 20,
            dots: false,
            nav: true,
            responsiveClass: true,
            navText: [
                "<i class='fa fa-long-arrow-left'></i>",
                "<i class='fa fa-long-arrow-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1,
                }

            },
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });


        /*====================================
        // team carousel
        ======================================*/

        $('.team-slider').owlCarousel({
            items: 3,
            loop: true,
            margin: 20,
            dots: false,
            nav: true,
            responsiveClass: true,
            navText: [
                "<i class='fa fa-long-arrow-left'></i>",
                "<i class='fa fa-long-arrow-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                1024:{
                    items:3,
                },
                576: {
                    items: 2,
                },

            },
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });

        /*====================================
        // major carousel
        ======================================*/


        $('.major-slider').owlCarousel({
            items: 4,
            loop: true,
            margin: 15,
            dots: false,
            nav: true,
            responsiveClass: true,
            navText: [
                "<i class='fa fa-long-arrow-left'></i>",
                "<i class='fa fa-long-arrow-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                1200: {
                    items: 4,
                },
                768: {
                    items: 3,
                },
                576: {
                    items: 2,
                },

            },
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });

        /*====================================
        // pub carousel
        ======================================*/


        $('.pub-slider').owlCarousel({
            items: 4,
            loop: true,
            margin: 15,
            dots: false,
            nav: true,
            responsiveClass: true,
            navText: [
                "<i class='fa fa-long-arrow-left'></i>",
                "<i class='fa fa-long-arrow-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                1200: {
                    items: 4,
                },
                768: {
                    items: 3,
                },
                576: {
                    items: 2,
                },

            },
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });
        



        /*====================================
        // tooltip
        ======================================*/

        $('[data-toggle="tooltip"]').tooltip();



        /*====================================
        // Tab link
        ======================================*/

        $('.tab-link').on('click', function(e) {
            e.preventDefault();
            var tab_id = $(this).attr('data-tab');
            $('.tab-link').removeClass('current');
            $(this).addClass('current');
            $(this).parent().parent().parent().find('.tab-pane .tab-content.current').removeClass('current');
            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });

        /*====================================
        // major report tab
        ======================================*/

        $('.report-link').on('click', function (e) {
            e.preventDefault();
            var report_id = $(this).attr('data-tab');
            $('.report-link').removeClass('current');
            $(this).addClass('current');
            $(this).parent().parent().parent().find('.tab-pane .report-content.current').removeClass('current');
            $(this).addClass('current');
            $("#" + report_id).addClass('current');
        });

        /*====================================
        // major report tab
        ======================================*/

        $('.economy-link').on('click', function (e) {
            e.preventDefault();
            var economy_id = $(this).attr('data-tab');
            $('.economy-link').removeClass('current');
            $(this).addClass('current');
            $(this).parent().parent().parent().find('.tab-pane .eco-content.current').removeClass('current');
            $(this).addClass('current');
            $("#" + economy_id).addClass('current');
        });

     
 
       


        /*====================================
        // faqs
        ======================================*/

        $('.acc-title i.fa-angle-down').on('click', function() {
            if ($(this).parent().parent().hasClass('active')) {
                $(this).parent().parent().removeClass('active');
            } else {
                $(this).parent().parent().addClass('active');
            }
        });

        // $('.walefare .acc-title i.fa.fa-angle-down').on('click', function () {
        //         $(this).parent().parent().find('.acc-content').toggle(300);
        // });



        $('.fa-gear').on('click', function() {
            $(this).parent().parent().parent().find('.formkit-checklist').slideToggle(300);
        });

        
        /*====================================
        // menu-fix
        ======================================*/

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 50) {
                $('.site-header').addClass("affix", 500);
            } else {
                $('.site-header').removeClass("affix", 500);
            }
        });

        var windowWidth = $(window).width();
        if (windowWidth <= 768) {

            jQuery('.workwith-content .apply-btn a').on('click', function() {
                var tab_scroll = $(".job-opening").offset();
                jQuery('html, body').animate({
                    scrollTop: (tab_scroll.top - 100)
                }, 700);
            });
        }
        /*====================================
        // major preview
        ======================================*/
        $('.major-preview').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image'
            // other options
        });
        $('.video-popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    });
})(jQuery);

