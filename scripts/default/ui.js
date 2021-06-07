'use strict';
window.onbeforeunload = function(){
    //$("body,html").scrollTop(0);
}
$(function (){
    

    var windowH=$(window).height(),
        windowW=$(window).innerWidth(),
        headerH=$("header").height();
    
    $(".jqimgFill").imgLiquid();
    imgFill();
    /* ==========================================================================
		[header]
 	==========================================================================*/
    $("header").each(function () {
        $(".menu-toggle").click(function () {
            $("html").toggleClass("menuOpen");
        });
        $(".reservation").click(function () {
            $("html,body").animate({
                scrollTop:$(".contact").offset().top-headerH
            },1000);
        });
        $(".menuReservation").click(function () {
            $("html").removeClass("menuOpen");
            $(window).scrollTop($(".contact").offset().top-headerH);
        });
        $(window).scroll(function(){
            if($(window).scrollTop()==0){
                $("html").removeClass("scrollMode");
                $("html").removeClass("headerHideMode");
            }
            else if($(window).scrollTop()>0 && $(window).scrollTop()<windowH){
                $("html").removeClass("scrollMode");
                $("html").addClass("headerHideMode");
            }
            else{
                 $("html").addClass("scrollMode");
                 $("html").removeClass("headerHideMode");
            }
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
        
        $(".enter").click(function(){
         $(".wp").addClass("menuMode");
        });
        
        function init() {
            setTimeout(function(){
                $(".cover .logo").addClass("located");
            },2800);
            var tl = new TimelineMax({
                repeat: 0,
            });
            tl
                .fromTo(".text-1 .dec", {
                    xPercent: 0
                }, {
                    duration: 1.2,
                    xPercent: 100
                }, 0)
                .fromTo(".text-4 .dec", {
                    xPercent: 0
                }, {
                    duration: 1.2,
                    xPercent: 100
                }, 0)
                .fromTo(".text-7 .dec", {
                    xPercent: 0
                }, {
                    duration: 1.2,
                    xPercent: 100
                }, 0)
                .fromTo(".text-9 .dec", {
                    xPercent: 0
                }, {
                    duration: 1.2,
                    xPercent: 100
                },0) 

                .fromTo(".text-2 .dec", {
                    yPercent: 0
                }, {
                    duration: 1.2,
                    yPercent: 100
                }, 1.0) 
                .fromTo(".text-6 .dec", {
                    yPercent: 0
                }, {
                    duration: 1.2,
                    yPercent: 100
                }, 1.0) 

                .fromTo(".text-3 .dec", {
                    autoAlpha: 1
                }, {
                    duration: 1.2,
                    autoAlpha: 0
                }, 2) 
                .fromTo(".text-5 .dec", {
                    autoAlpha: 1
                }, {
                    duration: 1.2,
                    autoAlpha: 0
                }, 2) 
                .fromTo(".text-7 .dec", {
                    autoAlpha: 1
                }, {
                    duration: 1.2,
                    autoAlpha: 0
                }, 2) 
                .fromTo(".text-8 .dec", {
                    autoAlpha: 1
                }, {
                    duration: 1.2,
                    autoAlpha: 0
                }, 2) 
                .fromTo(".text-10 .dec", {
                    autoAlpha: 1
                }, {
                    duration: 1.2,
                    autoAlpha: 0
                }, 2) 
                
                .fromTo(".animated-bg", {
                    autoAlpha: 0
                }, {
                    duration: 1.2,
                    autoAlpha: 1
                }, 5) 
                .from(".line", {
                    drawSVG: 0,
                    duration: 2
                }, 3.2)
                .to(".line", {
                    autoAlpha:0,
                    duration: 2,
                }, 5)
                .to(".building-mask-1", {
                    height:0,
                    duration: 1,
                    ease:Linear.easeNone
                }, 4.5)
                .to(".building-mask-2", {
                    height:0,
                    duration: 0.584,
                    ease:Linear.easeNone
                }, 5.5)
                .to(".building-mask-3", {
                    height:0,
                    duration: 0.142,
                    ease:Linear.easeNone
                }, 6.1)
                .from(".text-wrapper", {
                    top:100,
                    autoAlpha:0,
                    duration: 1
                }, 4.5);

                $(".enter-wrapper").mouseover(function(){
                    $(".enter-wrapper").mousemove(function(e){
                        TweenLite.to($(this).find(".enter"), 0.8, {
                            css: {
                                left: e.pageX-$(e.target).offset().left - $(e.target).width()/2 ,
                                top: e.pageY-$(e.target).offset().top- $(e.target).height()/2 ,
                            }
                        });
                    });
                });
                 $(".enter-wrapper").mouseout(function(){
                    TweenLite.to($(this).find(".enter"), 0.8, {
                        css: {
                            left: 0,
                            top: 0
                        }
                    });
                 });

        }
        init();
        $("main .menu a").hover(function(){
            $("#index").addClass("menuHoverMode");
        },function(){
            $("#index").removeClass("menuHoverMode");
        });
     });
    $("#landmarkEditor").each(function(){
        new Swiper('.swiper-container', {
            loop: true,
            speed: 1000,
            pagination: {
            el: '.swiper-pagination',
                clickable: true
            },
        })  
    });
    $("#amenitiesEditor").each(function(){
        new Swiper ('.swiper-container', {
            loop: true,
            centeredSlides:true,
            centeredSlidesBounds:true,
            speed: 1000,
            type: 'bullets',
            breakpoints: {
                1200: {
                    slidesPerView: 1.3
                },
                1600: {
                    slidesPerView: 1.58
                }
            },
                pagination: {
                el: '.swiper-pagination',
                type:"fraction"
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })  
        var $wrapper = $('.wrapper');
        if(windowW>1400){
            // $($wrapper).mouseover(function() {
            //     TweenLite.to($(this).prev(".view-btn"), 0.4, {
            //         scale: 1,
            //         autoAlpha: 1
            //     })
            // });
            //  $($wrapper).mousemove(function(e){
            //     TweenLite.to($(this).prev(".view-btn"), 0.8, {
            //         css: {
            //             left: e.pageX-$(e.target).offset().left,
            //             top: e.pageY-$(e.target).offset().top
            //         }
            //     });
            //  });
            // $($wrapper).mouseout(function() {
            //     TweenLite.to($(this).prev(".view-btn"), 0.4, {
            //         scale: 0.1,
            //         autoAlpha: 0
            //     })
            // });
            $(".wrapper").click(function(){
                $(this).next(".detail").addClass("active");
            });
        }
        else{
            $(".view-btn").click(function(){
                $(this).parent().find(".detail").addClass("active");
            });
        }
        $(".detail button").click(function(){
            $(this).parents(".detail").removeClass("active");
        });
    });
    $("#residenceEditor").each(function(){
        new Swiper ('.swiper-container', {
            loop: true, 
            speed: 1000,
            pagination: {
            el: '.swiper-pagination',
              clickable: true
            }
        }) 
        function curtain() {
            var $curtainWrapper=$(".curtain-wrapper"),
                curtain = $("#curtain"),
                $dragging = false;
            $("#curtain").css({ right: '50%' });
            $curtainWrapper.on('mousedown', function () {
                $dragging = true;
            })
            $curtainWrapper.on('mousemove',function (e) {
                if ($dragging) {
                    curtain.css({
                        'right': $(".curtain-wrapper").width() + $(".curtain-wrapper").offset().left - e.pageX <0?0:$(".curtain-wrapper").width() + $(".curtain-wrapper").offset().left - e.pageX
                    });
                }
            });
            $(document).on('mouseup',function (e) {
                $dragging = false;
            });
            $curtainWrapper.get(0).addEventListener("touchmove",function(e){
                curtain.css({
                    'right': $(".curtain-wrapper").width() + $(".curtain-wrapper").offset().left - e.touches[0].clientX <0?0:$(".curtain-wrapper").width() + $(".curtain-wrapper").offset().left - e.touches[0].clientX
                });
            });
        }
        curtain();
        if(windowW<1200){
            $(".residence-section-2  img").height(windowH);
        }
        $(window).scroll(function(){
            if($(window).scrollTop()>windowH){
                $(".banner .jqimgFill").addClass("opacity0");
            }
            else{
                $(".banner .jqimgFill").removeClass("opacity0");
            }
        });
    });
    $("#locationEditor").each(function(){
        new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            centeredSlides:true,
            centeredSlidesBounds:true,
            speed: 800,
            slidesPerView: 1,
            // 如果需要分页器
            breakpoints: {
                1200: {
                   slidesPerView: 1.333,
                },
            },


            pagination: {
                el: '.swiper-pagination',
                type:"fraction"
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }
        })  
        var $wrapper=$(".swiper-container");
        var $cursor=$("#cursor");
        var $prev=$(".swiper-button-prev");
        var $next=$(".swiper-button-next");
        if(windowW>1400){
            function moveCircle(e) {
                TweenLite.to($cursor, 1, {
                    css: {
                        left: e.pageX,
                        top: e.pageY-$(window).scrollTop()
                    }
                });
            }
            var flag = false;
            $($wrapper).mouseover(function() {
                flag = true;
                TweenLite.to($cursor, 0.4, {
                    scale: 1,
                    autoAlpha: 1
                })
                $($wrapper).on('mousemove', moveCircle);
            });
            $($wrapper).mouseout(function() {
                flag = false;
                TweenLite.to($cursor, 0.4, {
                    scale: 0.1,
                    autoAlpha: 0
                })
            });
            $($prev).mouseover(function() {
                TweenLite.to($cursor.find(".bg-white"), 0.4, {
                    rotate:0
                })
                
            });
            $($next).mouseover(function() {
                TweenLite.to($cursor.find(".bg-white"), 0.4, {
                    rotate:180
                })
            });
        }
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
    if(windowW<1200){
        $(".banner").height(windowH);
        $(".banner .jqimgFill").height(windowH);
    }
    aosInit();
})
function aosInit(){
    AOS.init({
        duration: 500,
        offset: 10,
        mirror: true,
    });
}

