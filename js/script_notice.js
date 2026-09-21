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

// Q&A 질문박스(답변 박스 한 번에 하나씩만 보이는 유형)
$(function() {

    // .answer 박스 숨기기
    $(".answer").hide();

    // .question 박스를 클릭했을 때 실행되는 함수
    $(".notice_Q").click(function() {
        // 다른 열려있는 .answer 박스 닫기
        // $(".answer"): 문서 안의 모든 답변 박스 요소를 선택
        // .next() : 클릭한 질문의 바로 다음 형제 요소(해당 질문의 답변)
        // .not($(this).next()): 괄호 안의 요소를 제외
        $(".answer").not($(this).next()).slideUp();
        
        // 다른 .question 박스의 아이콘을 원래대로
        $(".notice_Q").not(this).children().children('img').removeClass('turn')

        // 현재 클릭한 박스 토글
        $(this).next().slideToggle();
        $(this).children().children('img').toggleClass('turn')
    })
})

$(function () {

    $(".faq_answer").hide();


    $(".faq_Q").click(function () {

        $(".faq_answer")
            .not($(this).next()).slideUp();


        $(".faq_Q")
            .not(this).find(".faq_arrow img").removeClass("turn");


        $(this)
            .next().slideToggle();


        $(this)
            .find(".faq_arrow img").toggleClass("turn");

    });

});