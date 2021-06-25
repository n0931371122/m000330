'use strict';
$(function (){

    var windowW=$(window).innerWidth(),
        mobileMode,
        headerH=$("header").height();
    $(".jqimgFill").imgLiquid();
    imgFill();
    /* ==========================================================================
		[layout]
 	==========================================================================*/
    $("header").each(function () {
        $(".menu-toggle").click(function () {
            $("html").toggleClass("menuOpen");
        });
        
        $(".lang .toggle").click(function(){
            $(this).next().stop().slideToggle();
        });
    });
    $(".goTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });
    $(window).scroll(function () {  
        $(window).scrollTop()>0? $("header").addClass("scroll"):$("header").removeClass("scroll");
        $(window).scrollTop() > 100?$(".goTop").addClass("show"): $(".goTop").removeClass("show");
    });

    /* ==========================================================================
		[page]
     ==========================================================================*/
    var defaultEffect={
            speed: 1000
        },
        slideDotEffect={
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    if($($(this).get(0).$el).hasClass("index-banner")){
                        var num=index+1;
                        num=num<10?"0"+num:num;
                        return '<span class="' + className + ' circle">' + num + circleDot()+'</span>';
                    }
                    else{
                        return '<span class="' + className + ' circle"><span></span>'+circleDot()+'</span>';
                    }           
                }
            },
            on:{
                slideChangeTransitionStart:function(){
                    var tl = new TimelineMax({
                        repeat: 0,
                    });
                    tl.from($(this.el).find(".path"), {
                        drawSVG: 0,
                        duration: 1
                    })
                }
            }
        }
     $("#index").each(function(){
    //.index-banner
        new Swiper ('.index-banner',$.extend({
            loop: true, 
            autoplay:{delay:5000},
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },defaultEffect,slideDotEffect)) 
        //.index-section-1
        var swiperThumbs =new Swiper ('.index-section-1 .swiper-thumbs', {
            centeredSlides: true,
            centeredSlidesBounds: true,
            slidesPerView: 2.2,
            breakpoints: {
               768: {
                    slidesPerView: 2.5,
                     
                },
               992: {
                    slidesPerView: 3,
                     
                },
               1200: {
                    direction: 'vertical',
                    slidesPerView: 3,
                     loop: false, 
                     
                }
            },
        }) 
        var swiperyMain =new Swiper ('.index-section-1 .swiper-main',$.extend({
            effect:'fade',
            autoplay:{delay:5000},
            fadeEffect: {
                crossFade: true
            },
            cubeEffect: {
                slideShadows: false,
                shadow: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: swiperThumbs
            }
        },defaultEffect,slideDotEffect))
        swiperyMain.on('slideChangeTransitionStart', function() {
            swiperThumbs.slideTo(swiperyMain.activeIndex);
        });
        //.index-section-3
        new Swiper ('.index-section-3 .swiper-container',$.extend({
            centeredSlides: true,
            centeredSlidesBounds: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
               768: {
                    slidesPerView: 3,
                    direction: 'vertical',
                }
            },
        },defaultEffect,slideDotEffect)) 
        //.index-section-4
        new Swiper ('.index-section-4 .swiper-container', $.extend({
            loop: true,
            centeredSlides:true,
            centeredSlidesBounds:true,
            breakpoints: {
               768: {
                    slidesPerView: 1.5
                },
                1200: {
                    slidesPerView: 2
                },
                1600: {
                    slidesPerView: 2.3
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },defaultEffect)) 
    });
    $("#news,#videos,#products").each(function(){
        if(windowW<=1199){
            $(".content-wrapper .col-12").removeAttr("data-aos-delay");
        }
    });
    $("#category").each(function(){    
        var swiper=new Swiper ('.swiper-container',$.extend({
            loop: true,
            speed: 600,
            autoplay:{delay:5000},
            autoHeight:true,
            breakpoints: {
                768: {
                    direction: 'vertical',
                }
            }
        },defaultEffect,slideDotEffect)) 
        $(".link").click(function(){
            var index=$(this).data("target");
            console.log(index);
            $("html,body").animate({
                scrollTop:$(".swiper-container").offset().top-headerH
            },1000);
            swiper.slideTo(index)
            
        });
        $(".swiper-container .swiper-slide").each(function(){
            new Parallax($(this).find(".img").get(0));
        });
        

    });
    $("#products").each(function(){
        var count=$(".swiper-container .swiper-slide").length;
        new Swiper ('.links .swiper-container', {
            slidesPerView: 1,
            speed:600,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: count>5?5:count,
                }
            },
        })  
    });
    $("#product").each(function(){

        var swiperThumbs =new Swiper ('.swiper-thumbs', {
            centeredSlides: true,
            centeredSlidesBounds: true,
            slidesPerView: 3,
            direction: 'vertical',
        }) 
        new Swiper ('.swiper-main', $.extend({
            effect:'fade',
            fadeEffect: {
                crossFade: true
            },
            thumbs: {
                swiper: swiperThumbs
            }, 
        },defaultEffect,slideDotEffect))  
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

    aosInit();
    /* ==========================================================================
		[resize]
     ==========================================================================*/

    function resize(){
        windowW=$(window).innerWidth();
        windowW<992?mobileMode=true:mobileMode=false;
        if(mobileMode){
            $(".menu ul li").eq(6).append($("header .fb").detach()).append($("header .youtube").detach());
            $(".menu ul li").eq(6).append($("header .youtube").detach());
        }
        else{
            $(".complex").append($(".menu ul li").eq(6).find(".fb").detach());
            $(".complex").append($(".menu ul li").eq(6).find(".youtube").detach());
        }
        $("#product").each(function(){
            if(mobileMode){
                $(".product").prepend($(".title").detach());
            }
            else{
                $(".title-next-dot").before($(".title").detach())
            }
        });

        var trigger_size = [576];
        trigger_size.forEach(function (ele) {
            if (windowW > ele) {
                $(window).width() <= ele ? location.reload() : "";
            } else {
                $(window).width() > ele ? location.reload() : "";
            }
        });
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

