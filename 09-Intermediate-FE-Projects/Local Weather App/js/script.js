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
      $("#error").append("Unable to retrieve location. Change or update browser version");
      console.log("Geolocation is not supported for this browser.")
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
      $("#tempUnit").append("C");
      $("#description").append(result.weather[0].main + " ");
      var weatherCondition = result.weather[0].main;
      getIcon(weatherCondition);
      getBackground(weatherCondition);
    }
  });
}

function getIcon(condition) {
  var condition = condition.toLowerCase()
  switch (condition) {
    case "drizzle":
      setIcon(condition)
      break;
    case "clouds":
      setIcon(condition)
      break;
    case "rain":
      setIcon(condition)
      break;
    case "snow":
      setIcon(condition)
      break;
    case "clear":
      setIcon(condition)
      break;
    case "thunderstorm":
      setIcon(condition)
      break;
    default:
      $("div.clouds").removeClass("hide");
  }
}

function setIcon(condition) {
  //find the right icon by searching for a specific class name 
  $("div." + condition).removeClass("hide");
}

function getBackground(condition) {
  var condition = condition.toLowerCase();
  switch (condition) {
      
    case "clear": 
      $("body").css("background-image", "url(https://github.com/chrisjim316/freeCodeCamp-/blob/master/09-Intermediate-FE-Projects/Local%20Weather%20App/Images/backgroundChanging/clear.jpg?raw=true)");
      break;
      
    case "clouds":
      $("body").css("background-image", "url(https://github.com/chrisjim316/freeCodeCamp-/blob/master/09-Intermediate-FE-Projects/Local%20Weather%20App/Images/backgroundChanging/clouds.jpg?raw=true)");
      $("body").css("color", "black");
      break;
      
    case "drizzle":
      $("body").css("background-image", "url(https://github.com/chrisjim316/freeCodeCamp-/blob/master/09-Intermediate-FE-Projects/Local%20Weather%20App/Images/backgroundChanging/drizzle.jpg?raw=true)");
      break;
      
    case "rain":
      $("body").css("background-image", "url(https://github.com/chrisjim316/freeCodeCamp-/blob/master/09-Intermediate-FE-Projects/Local%20Weather%20App/Images/backgroundChanging/rain.jpg?raw=true)");;
      break;
      
    case "snow":
      $("body").css("background-image", "url(https://github.com/chrisjim316/freeCodeCamp-/blob/master/09-Intermediate-FE-Projects/Local%20Weather%20App/Images/backgroundChanging/snow.jpg?raw=true)");
      $("body").css("color", "black");
      break;
      
    case "thunderstorm":
      $("body").css("background-image", "url(https://github.com/chrisjim316/freeCodeCamp-/blob/master/09-Intermediate-FE-Projects/Local%20Weather%20App/Images/backgroundChanging/thunderstorm.jpg?raw=true)");
      break;
  }
}




  
 

