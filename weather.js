/*function getValue(btn) {
    
    alert(btn.value);
}*/
function start (){
    
    var cityName = document.getElementById("cityInput").value;
    displayWeather(cityName);
}
var weatherIcons = [
    '<img src="Formatted/clear_sky.png" class="wIcon">',
    '<img src="Formatted/few_clouds.png" class="wIcon">',
    '<img src="Formatted/scattered_clouds.png" class="wIcon">',
    '<img src="Formatted/broken_clouds.png" class="wIcon">',
    '<img src="Formatted/shower_rain.png" class="wIcon">',
    '<img src="Formatted/rain.png" class="wIcon">',
    '<img src="Formatted/thunderstorm.png" class="wIcon">',
    '<img src="Formatted/snow.png" class="wIcon">',
    '<img src="Formatted/mist.png" class="wIcon">',
    '<img src="Formatted/no_data.png" class="wIcon">',
    '<img src="Formatted/clear_night.png" class="wIcon">',
    '<img src="Formatted/few_clouds_night.png" class="wIcon">'
];

function displayWeather(cityName) {
    
    var cityId = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=7df59206a9ff2b08a1c1e4ad01befdbf";
    //alert(cityId);

var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", cityId, true);
    

    myRequest.onreadystatechange = function() {
       
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var weatherData = JSON.parse(myRequest.responseText);
            
            console.log(weatherData);
            //Weather variables
            var currentTemp = toCelsius(weatherData.main.temp).toFixed(1);
            var humidity = weatherData.main.humidity + " %";
            var description = weatherData.weather["0"].description;
            var visibility = weatherData.visibility / 1000 + " km";
            var wind = weatherData.wind.speed + " km/h";
            var icon = getIcon (weatherData.weather["0"].icon);
            
            var city = weatherData.name;
            
            
            //Articles
            
            var windDisplay = document.getElementById("wind");
            var tempDisplay = document.getElementById("temp");
            var visibilityDisplay = document.getElementById("vis");
            var humidityDisplay = document.getElementById("hum");
            var cityDisplay = document.getElementById("cityName");
            var descDisplay = document.getElementById("desc");
            
          
            
            //And the magic....
            
            cityDisplay.innerHTML = city;
            tempDisplay.innerHTML = currentTemp + " C" 
            descDisplay.innerHTML =  description  + '<br/>' + icon;
            visibilityDisplay.innerHTML = '<h3>Visibility</h3>' + visibility ;
            windDisplay.innerHTML = '<h3>Wind</h3>' + wind;
            humidityDisplay.innerHTML = '<h3>Humidity</h3>' + humidity;
            
            
              function getIcon (icon) {
                
                if (icon == "01d")
                    return weatherIcons[0];
                else if (icon == "01n")
                    return weatherIcons[10];
                else if (icon == "02d")
                    return weatherIcons[1];
                else if (icon == "03d")
                    return weatherIcons[2];
                 else if (icon == "04d") 
                    return weatherIcons[3];
                else if (icon == "02n" ||icon == "03n" ||icon == "04n")
                    return weatherIcons[11];
                 else if (icon == "09d" || icon == "09n")
                    return weatherIcons[4];
                 else if (icon == "10d" || icon == "10n")
                    return weatherIcons[5];
                 else if (icon == "11d" || icon == "11n")
                    return weatherIcons[6];
                 else if (icon == "13d" || icon == "13n")
                    return weatherIcons[7];
                 else if (icon == "50d" || icon == "50n")
                    return weatherIcons[8];
                else
                    return weatherIcons[9];
            }
            
            }
      
        }
    myRequest.send();
    
    }
    


function toCelsius(kelvin) {
    
    var celsius = kelvin - 273.15;
    return celsius;
}