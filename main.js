$(document).ready(function () {
    
    // Get Location 
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long);
    }

    function error() {
        console.log('There was an error');
    }

    // Call Weather
    function weather(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(URL, function(data) {
            updateDOM(data);
        });
    }

    // Update Dom
    function updateDOM(data) {
        var city = data.name;
        var temp = Math.round(data.main.temp_max);
        var desc = data.weather[0].description;
        if (desc = 'scattered clouds'){
            icon = 'images/Cloud.png'
        };
        if (desc = 'sunny'){
            icon = 'images/Sunny.png'
        };


        
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').attr('src', icon);
    }
});