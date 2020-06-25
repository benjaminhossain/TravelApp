const getCoordinates = (city, country) => {

    let locationInput = {
        placename: city,
        country: country
    };

    fetch("/coordinates", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(location)
    })
        .then(res => res.json())
        .then(function(res) {
            let coordinates = res.geonames;
            console.log(coordinates);
            return coordinates
        })
}

export{ getCoordinates }