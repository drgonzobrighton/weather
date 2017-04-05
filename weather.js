
var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=7df59206a9ff2b08a1c1e4ad01befdbf", true);
    

    myRequest.onreadystatechange = function() {
       
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var weatherData = JSON.parse(myRequest.responseText);
            
            //Weather variables
            var currentTemp = toCelsius(weatherData.main.temp).toFixed(2);
            var humidity = weatherData.main.humidity;
            
            console.log(weatherData);
            
        }
        
       
    }
    myRequest.send();



function toCelsius(kelvin) {
    
    var celsius = kelvin - 273.15;
    return celsius;
}