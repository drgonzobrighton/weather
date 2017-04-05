var myRequest = new XMLHttpRequest();

    myRequest.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=9804f656d6029f92d0171355141aa791", true);
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var weatherData = JSON.parse(myRequest.responseText);
        }
    }
    
    myRequest.send();