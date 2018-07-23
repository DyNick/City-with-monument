'use strict'
moveProgressBar();
$(window).resize(function() {
    moveProgressBar();
});

function moveProgressBar() {

    $('.progress').each(function(){
        $(this).find('.progress-bar').animate({
            width:$(this).attr('data-percent')
        },2000);
    });
/*

    var getPercent = ($('.progress-wrap').data('progress-percent') / 100),
        getProgressWrapWidth = $('.progress-wrap').width(),
        progressTotal = getPercent * getProgressWrapWidth,
        animationLength = 2500;


    $('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
*/



}

