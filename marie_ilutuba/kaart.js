function kaart() {
    var mapProp = {
        center: new google.maps.LatLng(58.00100715107405, 25.91506166319321),
        zoom: 17,
    };
    var map = new google.maps.Map(
        document.getElementById("googleKaart"),
        mapProp
    );
    var marker = new google.maps.Marker({
        position: {
            lat: 58.00100715107405,
            lng: 25.91506166319321,
        },
    });

    marker.setMap(map);
}
