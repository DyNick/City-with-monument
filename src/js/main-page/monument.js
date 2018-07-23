'use strict'

/*========================pop up image================*/
$(document).ready(function() {

    $(".monument-image-block__item").click(function(){
        console.log('img');
        var img = $(this).find('.monument-image-block__item__img');
        var src = img.attr('src');

        $("body").append("<div class='popup'>"+
            "<div class='popup_bg'></div>"+
            "<img src='"+src+"' class='popup_img' />"+
            "</div>");

        $(".popup").fadeIn(800);

        $(".popup_bg").click(function(){
            $(".popup").fadeOut(800);
            setTimeout(function() {

                $(".popup").remove();

            }, 800);
        });
    });

});


$(document).ready(function() {
    $(window).on("resize", function() {
        $(window).width() <= 480 ? ($(".monument-image-block").addClass("monument-carousel"),
            $(".monument-image-block").addClass("owl-carousel")) : ($(".monument-image-block").removeClass("monument-carousel"),
            $(".monument-image-block").removeClass("owl-carousel"))
    }).trigger("resize");
    $(".monument-carousel").owlCarousel({
        loop: 1,
        nav: 1,
        items: 1,
        margin: 10,
        navText: ['<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>', '<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>'],
        navSpeed: 500
    })
})