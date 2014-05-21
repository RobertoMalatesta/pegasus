function initialize() {
    var mapOptions = {
            center: new google.maps.LatLng(15.697718, 16.486035),
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            disableDefaultUI: true,
            zoom: 3
          };
    var map = new google.maps.Map(document.getElementById("map"));

    var layer = new google.maps.KmlLayer({
            url: 'https://s3-us-west-1.amazonaws.com/pegasus-mun/doc.kml',
            map: map,
            preserveViewport: true
          });

    map.setOptions(mapOptions);
};
