navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=' + pos.lat + '&lon=' + pos.lng, true);

    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            var processedInformation = JSON.parse(xhr.responseText);

            var city = document.querySelector('#cityShow');
            city.innerHTML = "Погода в "+ processedInformation.name;

            var clouds = document.querySelector('#cloudsShow');
            clouds.innerHTML = processedInformation.weather[0].main;

            var temp = document.querySelector('#tempShow');
            temp.innerHTML = "Температура " + Math.round(processedInformation.main.temp) + ' °C';

            var iconTake = document.getElementById('iconShow');
            iconTake.innerHTML="<img id='weather' src='"+processedInformation.weather[0].icon+"'>";

            var pressure = document.querySelector('#pressureShow');
            pressure.innerHTML = "Давление " + processedInformation.main.pressure + ' Па';




            //Фон, в зависимости от облачности


            if(processedInformation.clouds.all >= 65 ){
                var rain = document.body;
                rain.style.cssText = 'background-image: url("http://cv.cv.ua/wp-content/uploads/2016/09/003396611.jpg")'
            }
            else if(processedInformation.clouds.all >= 45){
                var itsCloudy = document.body;
                itsCloudy.style.cssText = 'background-image: url("http://kievvlast.com.ua/project/resources/2016/04/Dd0xIDPz.jpg")'
            }

            else if(processedInformation.clouds.all >= 25){
                var littleCloudy = document.body;
                littleCloudy.style.cssText = 'background-image: url("https://rm-content.s3.amazonaws.com/54f4c6be03845d2c42d5e899/643769/upload-9cabc2a0-c23b-11e6-8731-731aa8c4848c.jpg")'
            }
            else {
                var clear = document.body;
                clear.style.cssText = 'background-image: url("http://drobs.ru/opyat/46/leto_yasnoe_nebo_cvety_salatovyy_zabor_pole_doroga_1920x1080.jpg")'
            }
        }


        //конвертор в Фаренгейты и управление кнопками

        var btnFaren = document.querySelector('#fahrenheit');
        btnFaren.addEventListener('click', convert);

        function convert() {

            var faren = document.querySelector('#tempShow');
            faren.innerHTML = "Температура " + Math.round(1.8 * processedInformation.main.temp + 32) + ' °F';
        }

        var btnCesi = document.querySelector('#cesium');
        btnCesi.addEventListener('click', cesi);

        function cesi() {
            var temp = document.querySelector('#tempShow');
            temp.innerHTML = "Температура " + Math.round(processedInformation.main.temp) + ' °C';
        }

    };

});
