'use strict'


$("#popup-link").click(function() {
    $(".popup-ambassador").addClass('active');
});

$(".popup-ambassador").click(function() {
    $(".popup-ambassador").removeClass('active');
});

$("#CloseBtn").click(function() {
    $(".popup-ambassador").removeClass('active');
});