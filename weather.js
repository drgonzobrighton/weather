/*function getValue(btn) {
    
    alert(btn.value);
}*/


function displayWeather(clickedId) {
    
    var cityId = "http://api.openweathermap.org/data/2.5/weather?q=" + clickedId + "&APPID=7df59206a9ff2b08a1c1e4ad01befdbf";
    //alert(cityId);

var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", cityId, true);
    

    myRequest.onreadystatechange = function() {
       
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var weatherData = JSON.parse(myRequest.responseText);
            
            console.log(weatherData);
            //Weather variables
            var currentTemp = toCelsius(weatherData.main.temp).toFixed(2);
            var humidity = weatherData.main.humidity + " %";
            var description = weatherData.weather["0"].description;
            var visibility = weatherData.visibility / 1000 + " km";
            var wind = weatherData.wind.speed + " km/h";
            var icon = "http://openweathermap.org/img/w/" + weatherData.weather["0"].icon + ".png";
            
            
            //Articles
            
            var windDisplay = document.getElementById("wind");
            var tempDisplay = document.getElementById("temp");
            var visibilityDisplay = document.getElementById("vis");
            
            //And the magic....
            
            windDisplay.innerHTML = wind;
            tempDisplay.innerHTML = currentTemp + '<img src="' + icon + '" style="min-height:5em;">'; 
            visibilityDisplay.innerHTML = visibility + "<br/>" + description;
        }
        
       
    }
    myRequest.send();



function toCelsius(kelvin) {
    
    var celsius = kelvin - 273.15;
    return celsius;
}
    
    }