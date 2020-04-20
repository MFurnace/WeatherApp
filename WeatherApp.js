var button = document.querySelector("#zip-button")

button.addEventListener('click', function(){//;name.button.addEventListener('click',function();//
    console.log(moment());
    var inputValue = document.querySelector('.inputValue')
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${inputValue.value}&appid=7e3507f7dbdbe797dadd541ad3f87257&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        var name = document.querySelector('.name');
        var temp= document.querySelector('.temp');
        var des = document.querySelector('.des');
        var hum = document.querySelector('.hum');
        var lon = document.querySelector('.lon');
        var lat = document.querySelector('.lat');
        var time = document.querySelector('.time');
        var tz = document.querySelector('.tz');

        var nameValue = data.name;
        var tempValue = data.main.temp;
        var desValue = data.weather[0].description;
        var humValue = data.main.humidity;
        var lonValue = data.coord.lon;
        var latValue = data.coord.lat;
        var timeValue = moment().format('LLLL');
        var tzValue = moment().format();

        name.innerHTML = nameValue;
        temp.innerHTML = "Feels like " + Math.floor(tempValue) + "\xB0" + "C";
        des.innerHTML = desValue;
        hum.innerHTML = Math.floor(humValue) + (" percent humidity ");
        lon.innerHTML = lonValue + "\xB0" + "longitude";
        lat.innerHTML = latValue + "\xB0" + "latitude";
        time.innerHTML = timeValue;
        tz.innerHTML = tzValue;

    })


.catch(err => alert("Try Again!"));
})
