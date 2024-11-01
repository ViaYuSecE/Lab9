//Category filter
$(document).ready(function () {
    $(".gallery-box").addClass("show");

    function filterSelection(c) {
        let $elements = $(".gallery-box");
        if (c === "all") {
            $elements.addClass("show");
        } else {
            $elements.each(function () {
                $(this).removeClass("show");
                if ($(this).hasClass(c)) {
                    $(this).addClass("show");
                }
            });
        }
    }

    $("#myBtnContainer .btn").click(function () {
        $("#myBtnContainer .btn.active").removeClass("active");
        $(this).addClass("active");

        let filter = $(this).attr("onclick").split("'")[1];
        filterSelection(filter);
    });

    filterSelection("all");
});

//Popup window
$(".gallery-wrap a").click(function (event) {
    let pop_img = $(this).attr('href');
    $("body").append('<div class="pop_img_wrap"><div class="pop_img"><img src ="' + pop_img + '"></div></div>');
    $(".pop_img_wrap").addClass('active');
    $(".pop_img_wrap").click(function (event) {
        $(".pop_img_wrap").addClass('dactive');
        setTimeout(function () {
            $(".pop_img_wrap").remove()
        })
    });
    $(".pop_img").click(function (event) {
        return false
    });
    return false
});