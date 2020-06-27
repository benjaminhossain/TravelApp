const getImage = (city) => {
    
    let location = {
        city: city
        //country: country
    };

    fetch("http://localhost:8081/image", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(location)
    })
        .then(res => res.json())
        .then(function(res) {
            let imageURL = res.hits[0].largeImageURL;
            console.log(imageURL);
        })
}

export { getImage }