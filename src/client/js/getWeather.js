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
            const temp = weatherData['temp'];
            console.log(temp)

            document.getElementById('weather').innerText = `It's going to be ${temp}`
        })
}

export { getWeather }