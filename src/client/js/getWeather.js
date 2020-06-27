const getWeather = (weatherReq) => {

    fetch("http://localhost:8081/weather", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(weatherReq)
    })
        .then(res => res.json())
        .then(function(res) {
            const weatherData = res.data[0];
            //console.log(weatherData);
            const high = weatherData['high_temp'];
            const low = weatherData['low_temp'];
            const wind = weatherData['wind_spd'];
            console.log(high, low, wind)

            document.getElementById('weather').innerHTML = `High: ${high}F <br> Low: ${low}F <br> Wind: ${wind} mph`
        })
}

export { getWeather }