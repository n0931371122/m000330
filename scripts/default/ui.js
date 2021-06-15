'use strict';
window.onbeforeunload = function(){
    //$("body,html").scrollTop(0);
}
$(function (){
    

    var windowH=$(window).height(),
        windowW=$(window).innerWidth(),
        headerH=$("header").height(),
        mobileMode;
    $(".jqimgFill").imgLiquid();
    imgFill();
    /* ==========================================================================
		[header]
 	==========================================================================*/
    $("header").each(function () {
        $(".menu-toggle").click(function () {
            $("html").toggleClass("menuOpen");
        });
        $(".lang .toggle").click(function(){
            $(this).next().slideToggle();
        });
    });

    /* ==========================================================================
		[footer]
 	==========================================================================*/
    $('#privacyModal .goTop').click(function(){
        $(this).parents(".modal").animate({
            scrollTop:0
        },600);
    });

    /* ==========================================================================
		[page]
     ==========================================================================*/
     $("#index").each(function(){
        //.index-banner
        new Swiper ('.index-banner', {
            loop: true, 
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    var num=index+1;
                    num=num<10?"0"+num:num;
                    return '<span class="' + className + ' circle">' + num + circleDot()+'</span>';
                }
            },
            on:{
                slideChangeTransitionStart:function(){
                    var tl = new TimelineMax({
                        repeat: 0,
                    });
                    tl.from(".path", {
                        drawSVG: 0,
                        duration: 1
                    })
                }
            }

        }) 
        //.index-section-1
        var swiperThumbs =new Swiper ('.index-section-1 .swiper-thumbs', {
            centeredSlides: true,
            centeredSlidesBounds: true,
            slidesPerView: 3,
            direction: 'vertical'
        }) 
        var swiperyMain =new Swiper ('.index-section-1 .swiper-main', {
            speed: 1000,
            effect:'cube',
            cubeEffect: {
                slideShadows: false,
                shadow: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            thumbs: {
                swiper: swiperThumbs
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    var num=index+1;
                    num=num<10?"0"+num:num;
                    return '<span class="' + className + ' circle"><span></span>'+circleDot()+'</span>';
                }
            },
            on:{
                slideChangeTransitionStart:function(){
                    var tl = new TimelineMax({
                        repeat: 0,
                    });
                    tl.from(".path", {
                        drawSVG: 0,
                        duration: 0.8
                    })
                }
            }
        })
        swiperyMain.on('slideChangeTransitionStart', function() {
            swiperThumbs.slideTo(swiperyMain.activeIndex);
        });
        //.index-section-3
        new Swiper ('.index-section-3 .swiper-container', {
            centeredSlides: true,
            centeredSlidesBounds: true,
            slidesPerView: 3,
            direction: 'vertical'
        }) 
         //.index-section-4
        new Swiper ('.index-section-4 .swiper-container', {
            loop: true,
            centeredSlides:true,
            centeredSlidesBounds:true,
            speed: 1000,
            breakpoints: {
                1200: {
                    slidesPerView: 1.3
                },
                1600: {
                    slidesPerView: 2.3
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }) 
     });

    /* ==========================================================================
		[共用]
     ==========================================================================*/
    if($(".links").length>0){
        $(".links ul li").eq($(".wp").data("target")).find("a").addClass("active");
    }
    $(".banner-text-hide").each(function(){
        $(window).scroll(function(){
            if($(window).scrollTop()>20){
                $(".banner .font-165").addClass("hide");
            }
        });
    });
    $("header .menu a").hover(function(){
        $("header").addClass("menuHoverMode");
    },function(){
        $("header").removeClass("menuHoverMode");
    });
    // if(windowW<1200){
    //     $(".banner").height(windowH);
    //     $(".banner .jqimgFill").height(windowH);
    // }
    aosInit();
    /* ==========================================================================
		[resize]
     ==========================================================================*/
    function resize(){
        windowW=$(window).innerWidth();
        windowW<992?mobileMode=true:mobileMode=false

        if(mobileMode){
            $(".menu ul li").eq(6).append($("header .fb").detach()).append($("header .youtube").detach());
            $(".menu ul li").eq(6).append($("header .youtube").detach());
        }
        else{
            $(".complex").append($(".menu ul li").eq(6).find(".fb").detach());
            $(".complex").append($(".menu ul li").eq(6).find(".youtube").detach());
        }
    }
    $(window).resize(function(){
        resize();
    }).trigger('resize');


})
function aosInit(){
    AOS.init({
        duration: 500,
        offset: 10,
        mirror: true,
    });
}

