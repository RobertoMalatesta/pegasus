function initialize() {
    var mapOptions = {
            center: new google.maps.LatLng(15.697718, 16.486035),
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            zoom: 3,
            disableDefaultUI: true
          };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
};
