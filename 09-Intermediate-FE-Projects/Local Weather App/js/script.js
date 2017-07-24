var api = "https://fcc-weather-api.glitch.me/api/current?";
var temp;

$(document).ready(function() {
  $("#getWeather").on("click", function() {
    /* make Check Weather button disappear when clicked */
    document.getElementById("getWeather").style.display = "none";
    /* get the user's consent to use his/her location */
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = "lat=" + position.coords.latitude;
        var long = "lon=" + position.coords.longitude;
        var urlString = api + lat + '&' + long;
        getWeather(urlString);
        getLocation();
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }); //end getWeather function
  
   function getLocation() {
      $.ajax({
        url: "https://ipinfo.io/", dataType: "json", success: function(result) {
          $("#location").append("You are in " + result.city + ", " + result.country + "."); 
        }  
      });
   }
  
});

function getWeather(urlString) {
  $.ajax({
    url: urlString,  dataType: "json", success: function (result) {
      temp = Math.round(result.main.temp * 10) / 10;
      $("#temp").append(temp + " " + String.fromCharCode(176));
      $("#tempunit").append("C");
      $("#description").append(result.weather[0].main + " ");
    }
  });
}
