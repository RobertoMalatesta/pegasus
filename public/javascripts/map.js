function initialize() {
    var mapUrl = randUrl();
    
    var mapOptions = {
            center: new google.maps.LatLng(15.697718, 16.486035),
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            disableDefaultUI: true,
            zoom: 3
          };

    var zoomOptions = {
        minZoom: 3,
        maxZoom: 12
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var allowedBounds = new google.maps.LatLngBounds(
       new google.maps.LatLng(70.33956792419954, 178.01171875),
       new google.maps.LatLng(83.86483689701898, -88.033203125)
    );
    var lastValidCenter = map.getCenter();

    google.maps.event.addListener(map, 'center_changed', function() {
        if (allowedBounds.contains(map.getCenter())) {
            lastValidCenter = map.getCenter();
            return;
        }

        map.panTo(lastValidCenter);
    });

    map.setOptions(zoomOptions);

    var layer = new google.maps.KmlLayer({
            url: mapUrl,
            map: map,
            preserveViewport: true
          });

    window.setInterval(refreshKml, 5000, layer, map);
};

function refreshKml(layer, map) {
   var newUrl = randUrl();

   layer.setMap(null);
   layer.setUrl(randUrl());
   layer.setMap(map);
}

function randUrl() {
    return ('https://dl.dropbox.com/s/zcxr2lwkwfnvtgw/content.kml?time=' + (new Date()).getTime());
}
