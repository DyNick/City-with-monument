;(function(){
    function roundToPlace(num, place) {
        return Math.round(num*Math.pow(10, place))/Math.pow(10, place);
    }

    $('.js-loupe').each(function() {
        var $this = $(this);
        var $image = $('.js-loupe-image', $this);
        var imgBigUrl = $image.attr('data-image-full');
        var $loupe = $('.js-loupe-element', $this).css('background-image', 'url('+imgBigUrl+')');
        var $icon = $('.virtual-icon1');
        var $arrowDown1 = $('.virtual-icon2');
        var $subwayDescription = $('.virtual-icon8');
        var $subway = $('.virtual-icon9');
        var $baner2 = $('.virtual-icon4');
        var $taxi = $('.virtual-icon10');
        var $eat = $('.virtual-icon6');
        var $cup = $('.virtual-icon5');
        var $mail = $('.virtual-icon7');
        var $monumentArrow = $('.virtual-icon11');
        var $monumentDescription = $('.virtual-icon12');
        var $baner1 = $('.virtual-icon3');
        var loupeSize = [$loupe.width(), $loupe.height()];
        var bigImgSize = [0,0];
        var zoomLvl = 0.4;
        var bigImg = document.createElement('img');
        bigImg.onload = function(){
            bigImgSize = [bigImg.width, bigImg.height]
        }
        bigImg.src = imgBigUrl;

        /*$this.on('mousemove', function(e){

            var positionRatio = [
                Math.round(e.offsetX/$image.width() * 1000) / 1000,
                Math.round(e.offsetY/$image.height() * 1000) / 1000
            ];

            var offset = [
                (loupeSize[0] * positionRatio[0]) - (loupeSize[0] / 2),
                (loupeSize[1] * positionRatio[1]) - (loupeSize[1] / 2),
            ]

            var positionPercent = [
                'calc('+positionRatio[0]*100+'% - '+offset[0]+'px)',
                'calc('+positionRatio[1]*100+'% - '+offset[1]+'px)'
            ];

            $loupe.css({
                'background-position':  positionPercent.join(' '),
                'top': e.offsetY,
                'left': e.offsetX
            });

            console.log( positionPercent);
        });*/

        $this.on('mousemove', function(e) {
            //console.log('some');


            var positionRatio = [
                Math.round(e.offsetX/$image.width() * 1000) / 1000,
                Math.round(e.offsetY/$image.height() * 1000) / 1000
            ];

            var offset = [
                (loupeSize[0] * positionRatio[0]) - (loupeSize[0] / 2),
                (loupeSize[1] * positionRatio[1]) - (loupeSize[1] / 2),
            ]

            var positionPercent = [
                'calc('+positionRatio[0]*100+'% - '+offset[0]+'px)',
                'calc('+positionRatio[1]*100+'% - '+offset[1]+'px)'
            ];
            // console.log( positionPercent);
            $loupe.css({
                'background-position':  positionPercent.join(' '),
                'top': e.offsetY,
                'left': e.offsetX
            });
            function firstAction() {
                if ($loupe.css('top') >= '235px' && $loupe.css('top') <= '360px' && $loupe.css('left') >= '265px' && $loupe.css('left') <= '570px') {
                    $icon.css('display', 'block');
                    $icon.css('z-index', '3')
                }
                else {
                    $icon.css('display', 'none');
                    $icon.css('z-index', '0')
                }

            }
            firstAction() ;


            function secondAction() {
                if ($loupe.css('top') >= '0px' && $loupe.css('top') <= '130px' && $loupe.css('left') >= '620px' && $loupe.css('left') <= '830px') {
                    $arrowDown1.css('display', 'block');
                    $arrowDown1.css('z-index', '3');
                    $subwayDescription.css('display', 'block');
                    $subwayDescription.css('z-index', '3');
                    $subway.css('display', 'block');
                    $subway.css('z-index', '3')
                }
                else {
                    $arrowDown1.css('display', 'none');
                    $arrowDown1.css('z-index', '0');
                    $subwayDescription.css('display', 'none');
                    $subwayDescription.css('z-index', '0');
                    $subway.css('display', 'none');
                    $subway.css('z-index', '0')
                }

            }
            secondAction() ;


            function thirdAction() {
                if ($loupe.css('top') >= '133px' && $loupe.css('top') <= '253px' && $loupe.css('left') >= '338px' && $loupe.css('left') <= '544px') {


                    $baner2.css('display', 'block');
                    $baner2.css('z-index', '3');
                }
                else {

                    $baner2.css('display', 'none');
                    $baner2.css('z-index', '0');
                }

            }
            thirdAction() ;


            function fourthAction() {
                if ($loupe.css('top') >= '235px' && $loupe.css('top') <= '325px' && $loupe.css('left') >= '320px' && $loupe.css('left') <= '570px') {
                    $taxi.css('display', 'block');
                    $taxi.css('z-index', '3')
                }
                else {
                    $taxi.css('display', 'none');
                    $taxi.css('z-index', '0')
                }

            }
            fourthAction() ;


            function fivthAction() {
                if ($loupe.css('top') >= '200px' && $loupe.css('top') <= '318px' && $loupe.css('left') >= '364px' && $loupe.css('left') <= '650px') {
                    $eat.css('display', 'block');
                    $eat.css('z-index', '3')
                }
                else {
                    $eat.css('display', 'none');
                    $eat.css('z-index', '0')
                }

            }
            fivthAction() ;

            function sixAction() {
                if ($loupe.css('top') >= '170px' && $loupe.css('top') <= '290px' && $loupe.css('left') >= '680px' && $loupe.css('left') <= '950px') {


                    $cup.css('display', 'block');
                    $cup.css('z-index', '3');
                }
                else {

                    $cup.css('display', 'none');
                    $cup.css('z-index', '0');
                }

            }
            sixAction() ;

            function seventhAction() {
                if ($loupe.css('top') >= '170px' && $loupe.css('top') <= '290px' && $loupe.css('left') >= '570px' && $loupe.css('left') <= '780px') {


                    $mail.css('display', 'block');
                    $mail.css('z-index', '3');
                }
                else {

                    $mail.css('display', 'none');
                    $mail.css('z-index', '0');
                }

            }
            seventhAction() ;
            function eightAction() {
                if ($loupe.css('top') >= '160px' && $loupe.css('top') <= '185px' && $loupe.css('left') >= '190px' && $loupe.css('left') <= '426px') {
                    $monumentArrow.css('display', 'block');
                    $monumentArrow.css('z-index', '3');
                    $monumentDescription.css('display', 'block');
                    $monumentDescription.css('z-index', '3');
                }
                else {
                    $monumentArrow.css('display', 'none');
                    $monumentArrow.css('z-index', '0');
                    $monumentDescription.css('display', 'none');
                    $monumentDescription.css('z-index', '0');
                }

            }
            eightAction() ;


            function ninthAction() {
                if ($loupe.css('top') >= '120px' && $loupe.css('top') <= '199px' && $loupe.css('left') >= '338px' && $loupe.css('left') <= '544px') {
                    $baner1.css('display', 'block');
                    $baner1.css('z-index', '3');
                }
                else {
                    $baner1.css('display', 'none');
                    $baner1.css('z-index', '0');
                }

            }
            ninthAction() ;


        });





               /* $this.on('mousewheel DOMMouseScroll', function(event){
                    event.preventDefault();
                    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                        if(zoomLvl < 1.5) {
                            zoomLvl -= 0.3;
                            $loupe.css('background-size', bigImgSize[0]*zoomLvl+'px '+bigImgSize[1]*zoomLvl+'px');
                        }
                    }
                    else {
                        if(zoomLvl > 0.5) {
                            zoomLvl -= 0.1;
                            $loupe.css('background-size', bigImgSize[0]*zoomLvl+'px '+bigImgSize[1]*zoomLvl+'px');
                        }
                    }
                });
*/





    });

}());
