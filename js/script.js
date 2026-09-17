// 프로모션
setInterval(function () {

    $("#promotion_slide ul").animate({
        top: "-30px"
    }, 500, function () {

        $("#promotion_slide ul li:first-child")
            .appendTo("#promotion_slide ul");

        $("#promotion_slide ul").css("top", "0");

    });

}, 2000);

/* ===================================
   GNB 스크롤 방향에 따라 숨기기 / 보이기
=================================== */

$(function () {

    let prevScroll = $(window).scrollTop();


    $(window).on("scroll", function () {

        // 현재 스크롤 위치
        let currentScroll = $(window).scrollTop();

        // 프로모션 높이
        let promotionHeight = $("#promotion_slide").outerHeight();


        /* 맨 위쪽 영역 */
        if (currentScroll <= promotionHeight) {

            // 원래 위치로 돌아감
            $("#gnb").removeClass("fixed hide");


        }

        /* 아래로 스크롤 */
        else if (currentScroll > prevScroll) {

            // GNB 숨김
            $("#gnb")
                .addClass("fixed")
                .addClass("hide");

        }

        /* 위로 스크롤 */
        else if (currentScroll < prevScroll) {

            // GNB 다시 나타남
            $("#gnb")
                .addClass("fixed")
                .removeClass("hide");

        }


        // 현재 위치를 이전 위치로 저장
        prevScroll = currentScroll;

    });

});

// 배너 swiper
const visualSwiper = new Swiper(".visualSwiper", {

    loop: true,

    speed: 1000,

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    pagination: {
        el: ".visual_pagination",
        type: "progressbar",
    },

    navigation: {
        nextEl: ".visual_next",
        prevEl: ".visual_prev",
    },

});

// collage
$(function () {

    $(".collage_menu li a").click(function (e) {

        e.preventDefault();

        let index = $(this).parent().index();

        $(this).parent().addClass("on").siblings().removeClass("on");

        $(".collage_wrap ul").removeClass("on");
        $(".collage_wrap ul").eq(index).addClass("on");

    });

});

// product scroll

$(function () {

    // product scroll 전체 섹션
    const $productScroll = $("#product_scroll");

    // 왼쪽 / 오른쪽 이미지 묶음
    const $leftTrack = $(".product_left .product_track");
    const $rightTrack = $(".product_right .product_track");


    function productScrollMove() {

        // product_scroll이 문서 위에서 얼마나 떨어져 있는지
        const sectionTop = $productScroll.offset().top;

        // product_scroll 전체 높이
        const sectionHeight = $productScroll.outerHeight();

        // 현재 브라우저 화면 높이
        const windowHeight = $(window).height();

        // 현재 문서가 얼마나 스크롤됐는지
        const scrollTop = $(window).scrollTop();


        // 마지막 100vh는 최종 화면을 유지하는 구간
        const holdHeight = windowHeight;

        // 이미지 애니메이션이 진행되는 실제 스크롤 범위
        const scrollRange =
            sectionHeight - windowHeight - holdHeight;

        let progress =
            (scrollTop - sectionTop) / scrollRange;

        // 0보다 작아지거나 1보다 커지지 않게 제한
        progress = Math.max(0, Math.min(1, progress));


        // 왼쪽 이미지 묶음이 움직일 수 있는 최대 거리
        const leftMax =
            Math.max(0, $leftTrack.outerHeight() - windowHeight);

        // 오른쪽 이미지 묶음이 움직일 수 있는 최대 거리
        const rightMax =
            Math.max(0, $rightTrack.outerHeight() - windowHeight);


        // 왼쪽 이미지
        // 스크롤할수록 아래에서 위로 올라감
        $leftTrack.css(
            "transform",
            "translateY(" + (-leftMax * progress) + "px)"
        );


        // 오른쪽 이미지
        // 처음에는 위로 당겨져 있다가
        // 스크롤할수록 아래로 내려옴
        $rightTrack.css(
            "transform",
            "translateY(" + (-rightMax * (1 - progress)) + "px)"
        );

    }


    // 스크롤할 때마다 실행
    $(window).on("scroll", function () {
        productScrollMove();
    });


    // 브라우저 크기가 바뀔 때도 다시 계산
    $(window).on("resize", function () {
        productScrollMove();
    });


    // 새로고침했을 때 현재 스크롤 위치에 맞게 한 번 실행
    productScrollMove();

});

// Instagram Swiper 
var swiper = new Swiper(".instaSwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 5000,
});
