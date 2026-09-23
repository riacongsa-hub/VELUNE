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

AOS.init();