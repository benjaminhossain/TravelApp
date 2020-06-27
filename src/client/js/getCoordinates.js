const getCoordinates = (city, country) => {

    let locationInput = {
        placename: city,
        country: country
    };

    fetch("http://localhost:8081/coordinates", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(locationInput)
    })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('whereTo').innerText = `Your trip to ${city}`

            let coordinateObject = res.geonames[0];
            //console.log(coordinateObject);
            let coordinates = {
                lat: coordinateObject.lat,
                lng: coordinateObject.lng
            }
            console.log(coordinates);
            Client.getWeather(coordinates);
        })
}

export { getCoordinates }