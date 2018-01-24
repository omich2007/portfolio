function initMap() {
    var uluru = {lat: 49.232781, lng: 28.46832812};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

