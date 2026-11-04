$(document).ready(function() {
    //메뉴
    $(".menu>li").mouseenter(function(){
        $(this).children(".sub").stop().slideDown();
    });
    $(".menu>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    });

    //모바일메뉴

    $(".ham").click(function() {
        $(".mo_wrap").fadeIn(300);
        $("body").css("overflow", "hidden");
    });

    $(".close").click(function() {
        $(".mo_wrap").fadeOut(300);
        $("body").css("overflow", "auto");
    });

    $(".mo_menu > li > a").click(function(e) {
        e.preventDefault();

        let $submenu = $(this).next(".mosub");

        $(".mosub").not($submenu).slideUp();

        $submenu.stop(true, true).slideToggle();
    });

    $(function () {

        const scrollDistance = 260;

        function headerScroll() {

            let scrollTop = $(window).scrollTop();

            // 스크롤 진행률 0 ~ 1
            let progress = Math.min(
                Math.max(scrollTop / scrollDistance, 0),
                1
            );

            // 모바일 여부
            let isMobile = window.innerWidth <= 768;

            // 최초 헤더 크기
            let startGap = isMobile ? 32 : 200;
            let startTop = isMobile ? 16 : 71;
            let startRadius = isMobile ? 50 : 100;

            // 스크롤 진행에 따라 값 변경
            let gap = startGap * (1 - progress);
            let top = startTop * (1 - progress);
            let radius = startRadius * (1 - progress);

            $('header').css({
                '--header-gap': gap + 'px',
                '--header-top': top + 'px',
                '--header-radius': radius + 'px'
            });

        }

        $(window).on('scroll resize', headerScroll);

        headerScroll();

    });

    var swiper = new Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
        nextEl: '.medical_next',
        prevEl: '.medical_prev',
        },

        breakpoints: {
            // 모바일
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },

            // 태블릿
            780: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },

            // PC
            1280: {
                slidesPerView: 2.2,
                spaceBetween: 40,
            }
        }
    });

    const basicSwiper = new Swiper('.basicSwiper', {
        effect: 'slide',
        slidesPerView: 'auto',
        speed: 600,
        grabCursor: true,
        allowTouchMove: true,
    });

});