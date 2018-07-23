


$(document).ready(function(){
    AOS.init({
        startEvent: 'load',
    });
});






function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height() - 200, // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") {
        return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    }
    if (eval == "above") {
        return ((y < (viewportHeight + scrolltop)));
    }
}
if ($('#diagram').length !== 0) {
    if (checkVisible($('#diagram'))) {
        document.getElementById('diagram').play();
        $(window).off('scroll');
    }
}

$(document).ready(function() {
    $(window).bind('scroll', function() {
        if($(window).width() <= 480 ){
            if($(window).scrollTop() > 900){
                $('.header__content').addClass('fixed');
                $('.section-second').css('padding-top', '85px');
            }else{
                $('.header__content').removeClass('fixed');
                // Adding padding so it doesn't jump up
                // when the menu gets fixed.
                $('.section-second').css('padding-top', '0px');
            }
        }
        else {
            // The value of where the "scoll" is.
            if ($(window).scrollTop() > 700) {
                $('.header__content').addClass('fixed');
                $('.section-second').css('padding-top', '85px');
            } else {
                $('.header__content').removeClass('fixed');
                // Adding padding so it doesn't jump up
                // when the menu gets fixed.
                $('.section-second').css('padding-top', '0px');
            }
        }
    })
});
$(document).ready(function() {

    $('.menu__Btn').click(function () {
        $('.nav-list').addClass('active')
    });

    $('.close-button').click(function () {
        $('.nav-list').removeClass('active')
    });


    $(".nav-list__item").find("a").click(function (e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 100
        });
        $('.nav-list').removeClass('active');
    });
});

var sections = $("section")
    , nav = $(".nav-list__item")
    , nav_height = nav.outerHeight();
$(window).on("scroll", function() {
    var e = $(this).scrollTop();
    sections.each(function() {
        var a = $(this).offset().top - 150
            , i = a + $(this).outerHeight();
        e >= a && e <= i && (nav.find("a").removeClass("active"),
            $(this).addClass("active"),
            nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active"))
    })
})

