var api = "https://fcc-weather-api.glitch.me/api/current?";

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
        $("div.locationContainer").removeClass("hide");
      });
    } else {
      $("#error").append("Unable to retrieve location. Change or update browser version");
      console.log("Geolocation is not supported for this browser.")
    }
  }); //end getWeather function
  
   function getLocation() {
      $.ajax({
        url: "https://ipinfo.io/", dataType: "json", success: function (result) {
          $("#location").append(result.city + " " + result.country); 
        }  
      });
   }
  
});

function getWeather(urlString) {
  $.ajax({
    url: urlString,  dataType: "json", success: function (result) {
      var temp = result.main.temp.toFixed(1);
      $("#temp").append(temp);
      $("#tempUnit").append(String.fromCharCode(176) + "C");
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
      setIcon(condition);
      break;
    case "clouds":
      setIcon(condition);
      break;
    case "rain":
      setIcon(condition);
      $("div.cloud-intro").removeClass("cloud-intro");
      break;
    case "snow":
      setIcon(condition);
      $("div.cloud-intro").removeClass("cloud-intro");
      break;
    case "clear":
      setIcon(condition);
      $("div.cloud-intro").removeClass("cloud-intro");
      break;
    case "thunderstorm":
      setIcon(condition);
      $("div.cloud-intro").removeClass("cloud-intro");
      break;
    default:
      setIcon(clouds);
      break;
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
      /* $("div.addCloud").addClass("cloud-intro"); */
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

/* if toFahrenheit button is clicked, temp is converted into celsius */
$("#toFahrenheit").on("click", function () {
  var tempUnit = $("#tempUnit").text();
  if(tempUnit === (String.fromCharCode(176) + "C")) {
    var temp = $("#temp").text();
    temp = (temp * 9 / 5 + 32).toFixed(1);
    $("#temp").text(temp);
    $("#tempUnit").text(String.fromCharCode(176) + "F");
  }  
});

/* if toCelsius button is clicked, temp is converted into fahrenheit */
$("#toCelsius").on("click", function () {
  var tempUnit = $("#tempUnit").text();
  if(tempUnit === (String.fromCharCode(176) + "F")) {
    var temp = $("#temp").text();
    temp = (((temp - 32) * 5) / 9 ).toFixed(1);
    $("#temp").text(temp);
    $("#tempUnit").text(String.fromCharCode(176) + "C");
  }
});

