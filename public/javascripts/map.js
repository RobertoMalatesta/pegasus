function initialize() {
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

    var layer = new google.maps.KmlLayer({
            url: 'https://s3-us-west-1.amazonaws.com/pegasus-mun/doc.kml',
            map: map,
            preserveViewport: true
          });

    var allowedBounds = new google.maps.LatLngBounds(
       new google.maps.LatLng(70.33956792419954, 178.01171875),
       new google.maps.LatLng(83.86483689701898, -88.033203125)
    );
    var lastValidCenter = map.getCenter();

    google.maps.event.addListener(map, 'center_changed', function() {
        if (allowedBounds.contains(map.getCenter())) {
            // still within valid bounds, so save the last valid position
            lastValidCenter = map.getCenter();
            return;
        }

        // not valid anymore => return to last valid position
        map.panTo(lastValidCenter);
    });

    map.setOptions(zoomOptions);
};
