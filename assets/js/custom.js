$(window).resize(function(){
    // Home page slider Function leistungen_slider();
    leistungen_slider();


    //  Slider Functions in other Pages

    heigh_light_slider();
    services_slider();
    dein_images_slider();
    new_lorem_slider();
});


$(document).ready(function(){
    // Home page slider Function leistungen_slider();
    leistungen_slider();
    
    // footer-fixed menu
    $(".footer-fixed-trigger").click(function(){
        $(".footer-fixed-trigger").toggleClass("active");
        $(".footer-fixed-icon").toggleClass("show");
    });
    
    // toggle class
    $('.menu-toggle-btn').click(function(){
        $('.header-wrapper').toggleClass('mobileopen');
        $('html').toggleClass('cm-overflow');
    });
    
    $('.has-submenu a').click(function(){
        // console.log('yes');
        $(this).parent('.has-submenu').toggleClass('open-sub-menu');
    });

    // WOW js
    new WOW().init();
    
    // Contact Side bar On Home page
    $('.contact--form-main').hover(
        function () {
            $(this).addClass('active');
            $('.contact--pallate').addClass('active');
        }, 
        function () {
            $(this).removeClass('active');
            $('.contact--pallate').removeClass('active');
        }
    );
    
    // Accordion Js
    
    $('.ct_accordion_lable').click(function(){
        
        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');
        $(this).toggleClass('ct_visiable');
        $(this).parents('.hgf-col').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');

        $(this).siblings().find('.ct_accordion_info').slideUp();
        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_info').slideUp();
        $(this).parents('.hgf-col').siblings().find('.ct_accordion_info').slideUp();
        
        $(this).parents('.ct_accordion_wrap').find('.ct_accordion_info').slideToggle();
    });
    
     //read more js 
     $('.moreless-button').click(function() {
        // unsere slider section btn js
        $(this).parents('.unsere_slider_section .owl-item').siblings().find('.moretext').slideUp();
        $(this).parents('.unsere_slider_section .owl-item').siblings().find('.slide_toggle_btn').fadeOut('fast');

        // unsere slider section more-contain slidetoggle
        $(this).parents('.main_more_text').find('.moretext').slideToggle();
        $(this).parents('.main_more_text').find('.slide_toggle_btn').fadeToggle('fast');

        if ($(this).find('span').text() == "weniger") {
            $(this).find('span').text("mehr dazu")
            $(this).find('.fa-angle-down').removeClass('angle_rotact');
            
        } else {
            $(this).find('span').text("weniger");
            $(this).find('.fa-angle-down').addClass('angle_rotact');
        }
    });


    $('.footer_wrapper .owl-carousel').owlCarousel({
        loop:false,
        margin:48,
        nav:true,
        dots: false,
        navText: ["<img src='assets/images/leistung_web/owl_left.svg'>","<img src='assets/images/leistung_web/owl_right.svg'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1441:{
                items:2
            }
        }
    })

    $('.unsere_slider_section .owl-carousel').owlCarousel({
        loop:true,
        margin:70,
        nav:true,
        stagePadding: 66,
        dots: false,
        navText: ["<img src='assets/images/leistung_web/owl_left.svg'>","<img src='assets/images/leistung_web/owl_right.svg'>"],
        responsive:{
            0:{
                items:1,
                margin:30,
                stagePadding: 0,
                dots:true,
            },
            769:{
                items:2.1,
                margin:30,
                dots:false, 
            },
            1200:{
                items:2.5,
                margin:30,
            },
            1440:{
                items:3,
                margin:30,
            }
        }
    })

    // krus table weekly inner list
    $('.krus_day_main_list ul li a').click(function(){
        $(this).addClass('active').parents('li').siblings().find('a').removeClass('active');
        var krus_day_main_list = $(this).attr('data-day');
        console.log(krus_day_main_list);
        $(this).parents('.krus_day_main_list').find($('.'+ krus_day_main_list)).addClass('active').siblings().removeClass('active');
    });    

    // krus table list
    $('.krus_day_title li a').click(function(){
        $(this).addClass('active').parents('li').siblings().find('a').removeClass('active');
        var krus_day_title = $(this).attr('id');
        $('.'+krus_day_title).addClass('active').siblings().removeClass('active');
    })

    // studio page js
    // studio page slider js
    $('.unser_team_innser_slider .owl-carousel').owlCarousel({
        loop:true,
        margin:40,
        dots: false,
        stagePadding: 106,
        nav:true,
        navText: ["<img src='assets/images/leistung_web/owl_left.svg'>","<img src='assets/images/leistung_web/owl_right.svg'>"],
        responsive:{
            0:{
                items:1,
                stagePadding: 0,
                margin:30,
                dots:true,
            },
            576:{
                items:2,
                stagePadding: 0,
                margin:30,
            },
            768:{
                items:3,
                stagePadding: 0,
                margin:30,
            },
            992:{
                items:3,
                margin:25,
            }
        }
    })

    // konkate page input js
    $('.kotakt_form .messages').click(function(){
        $(this).addClass('active');
    })

    


    //  Slider Functions in other Pages
    
    heigh_light_slider();
    services_slider();
    dein_images_slider();
    new_lorem_slider();
    
    
});
    
    
// Home page slider Function leistungen_slider();
function leistungen_slider() {
    var checkWidth = $(window).width();
    
    var owlPost = $(".leistungen--slider");
    
    if (checkWidth >= 768) {
        
        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }
        
        owlPost.removeClass('owl-carousel');
        
    } else if (checkWidth <= 767) {
        
        owlPost.addClass('owl-carousel');
        
        owlPost.owlCarousel({
            /*loop:true,*/
            margin:0,
            dots: true,
            nav: false,
            // navText: ["<img src='assets/images/home/arrow-right.png'>","<img src='assets/images/home/arrow-right.png'>"],
            responsive:{
                0:{
                    items:1.3,
                },
                576:{
                    items:2,
                }
            }
        });
    }
}                

// highlight slider
function heigh_light_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".heightlight_slider");

    if (checkWidth >= 768) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 767) {

        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
            /*loop:true,*/
            margin:0,
            dots:false,
            nav: true,
            navText: ["<img src='assets/images/home/arrow-right.png'>","<img src='assets/images/home/arrow-right.png'>"],
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                850:{
                    items:2
                }
            }
        });
    }
}

// Services slider
function services_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".Leistung_web_services_slider");

    if (checkWidth >= 768) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 767) {

        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            nav: true,
            navText: ["<img src='assets/images/home/arrow-right.png'>","<img src='assets/images/home/arrow-right.png'>"],
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:1,
                },
                850:{
                    items:1
                }
            }
        });
    }
}

// Services slider
function dein_images_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".dein_images_slider");

    if (checkWidth >= 768) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 767) {

        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            nav: true,
            navText: ["<img src='assets/images/home/arrow-right.png'>","<img src='assets/images/home/arrow-right.png'>"],
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:2,
                },
            }
        });
    }
}

// news slider
function new_lorem_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".new_lorem_inner_section");

    if (checkWidth >= 768) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 767) {

        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            nav: true,
            navText: ["<img src='assets/images/home/arrow-right.png'>","<img src='assets/images/home/arrow-right.png'>"],
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:1,
                },
            }
        });
    }
}
         
                
     