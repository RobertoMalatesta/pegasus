function initialize() {
    var mapUrl = randUrl();

    var mapOptions = {
            center: new google.maps.LatLng(15.697718, 16.486035),
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            zoom: 3,
            disableDefaultUI: true
          };

    var zoomOptions = {
        minZoom: 3,
        maxZoom: 12
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    map.setOptions(zoomOptions);

    var layer = new google.maps.KmlLayer({
            url: mapUrl,
            map: map,
            preserveViewport: true
          });

    window.setInterval(refreshKml, 30000, layer, map);
};

function refreshKml(layer, map) {
   var newUrl = randUrl();

   //layer.setMap(null);
   layer.setUrl(randUrl());
   layer.setMap(map);
}

function randUrl() {
    return ('https://dl.dropbox.com/s/zcxr2lwkwfnvtgw/content.kml?time=' + (new Date()).getTime());
}
