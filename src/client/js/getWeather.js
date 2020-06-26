const getWeather = (weatherReq) => {

    fetch("http://localhost:8081/weather", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(weatherReq)
    })
        .then(res => res.json())
        .then(function(res) {
            let weatherData = res.data[0];
            //console.log(weatherData);
            let temp = weatherData['temp'];
            console.log(temp)
            })
}

export { getWeather }