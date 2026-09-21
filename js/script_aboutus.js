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


/* ==================================================
   OUR PHILOSOPHY
================================================== */

$(function () {


    /* =========================
       움직일 단어
    ========================= */

    let movingWords = {

        moments: $("#moments"),
        movement: $("#movement"),
        elegance: $("#elegance"),

        ko1: $("#ko1"),
        ko2: $("#ko2"),
        ko3: $("#ko3"),
        ko4: $("#ko4")

    };


    // 단어가 이미 모였는지 확인
    let assembled = false;



    /* ==================================================
       단어가 최종적으로 들어갈 위치 구하기
    ================================================== */

    function getTargetPosition(name) {


        // 해당 단어가 들어갈 투명한 자리
        let $slot =
            $('.word_slot[data-target="' + name + '"]');


        // slot의 위치
        let slotRect =
            $slot[0].getBoundingClientRect();


        // Philosophy 화면 위치
        let sceneRect =
            $(".philosophy_scene")[0]
                .getBoundingClientRect();



        return {

            left:
                slotRect.left -
                sceneRect.left,

            top:
                slotRect.top -
                sceneRect.top,

            fontSize:
                parseFloat(
                    $slot.css("font-size")
                ),

            lineHeight:
                $slot.css("line-height")

        };

    }



    /* ==================================================
       흩어진 단어 → 문장으로 모으기
    ================================================== */

    function assembleWords() {


        // 한 번만 실행
        if (assembled) {
            return;
        }


        assembled = true;



        $.each(
            movingWords,
            function (name, $word) {


                let target =
                    getTargetPosition(name);

                    
                /* 둥둥 떠다니는 애니메이션 정지 */
                $word.css("animation", "none");


                $word.css({

                    left:
                        target.left + "px",

                    top:
                        target.top + "px",

                    fontSize:
                        target.fontSize + "px",

                    lineHeight:
                        target.lineHeight,

                    transform:
                        "translate(0, 0)"

                });

            }
        );

    }



    /* ==================================================
       Philosophy가 화면을 완전히 채운 뒤
       한 번 더 스크롤하면 실행
    ================================================== */

    $(window).on("wheel", function (e) {


        // 아래로 스크롤할 때만
        if (e.originalEvent.deltaY <= 0) {
            return;
        }



        // 이미 모였다면 종료
        if (assembled) {
            return;
        }



        let scene =
            $(".philosophy_scene")[0];


        let sceneRect =
            scene.getBoundingClientRect();



        /*
            Philosophy scene이

            화면 상단에 거의 정확하게 도착하고
            화면 전체를 차지했는지 확인
        */

        let sceneReady =

            sceneRect.top <= 5

            &&

            sceneRect.bottom >=
            $(window).height() - 5;



        /* =========================
           화면을 다 채운 다음에만 실행
        ========================= */

        if (sceneReady) {

            assembleWords();

        }

    });


});