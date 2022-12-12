function addEvent(event, elem, fxn) {
    if(elem.addEventListener) {
        elem.addEventListener(event, fxn, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + event, fxn);
    } else {
        elem['on' + event] = fxn;
    }
}

function determineLocation() {
    if(navigator.onLine) {
        if (Modernizr.geolocation) {
            navigator.geolocation.getCurrentPosition(displayOnMap);

            var container = Raphel(document.getElementById("spinner"),125 ,125);
            var spinner = container.image("images/spinnerBW.svg", 0, 0, 125, 125);
            var attrsToAnimate = {transform: "r720"};
                    spinner.animate(attrsToAnimate, 60000);
        }

    }
        else {
            alert("You must be online to use this feature.");
        }
    
}
    function displayOnMap(position) {
        document.getElementById("spinner").style.display = "none";
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        var myOptions = {
            zoom: 14,
            mapTypeId: google.maps.mapTypeId.ROADMAP
        };
        
        var map = new google.maps.Map(document.getElementById("geoForm"), myOptions);
        var initialLocation = new google.maps.Marker({
            position: initialLocation,
            map: map,
            title: "Hello World!"
        });
            map.setCenter(initialLocation);
    }
var geobutton = document.getElementById('geobutton');
addEvent('click', geobutton, determineLocation);

