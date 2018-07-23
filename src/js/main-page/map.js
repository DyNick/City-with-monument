'use strict'
function myMap()
{
    var location = document.getElementById('googleMap');
    var dataLat = location.dataset.lat;
    var dataLng = location.dataset.lng;
    var myCenter=new google.maps.LatLng(dataLat, dataLng);
    var goldStar = {
        path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
        fillColor: 'yellow',
        fillOpacity: 0.8,
        scale: 1,
        strokeColor: 'gold',
        strokeWeight: 14
    };
    var mapOptions= {
        center:myCenter,
        zoom:18, scrollwheel: true, draggable: true,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(location,mapOptions);

    var marker = new google.maps.Marker({
        /*icon: "https://png.icons8.com/nolan/2x/marker.png",*/
        icon: "../img/mark-icon.png",
        position: myCenter,
    });
    marker.setMap(map);
}