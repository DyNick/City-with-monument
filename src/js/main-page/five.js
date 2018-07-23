'use strict'

$(document).ready(function() {
    $(window).on("resize", function() {
        $(window).width() <= 480 ? ($("#backers-carousel").addClass("backers-carousel"),
            $("#backers-carousel").addClass("owl-carousel")) : ($("#backers-carousel").removeClass("backers-carousel"),
            $("#backers-carousel").removeClass("owl-carousel"))
    }).trigger("resize");
    $(".backers-carousel").owlCarousel({
        loop: 1,
        nav: 1,
        items: 1,
        margin: 10,
        navText: ['<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>', '<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>'],
        navSpeed: 500
    })
})