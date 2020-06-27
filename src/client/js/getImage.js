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
            const imageURL = res.hits[0].largeImageURL;
            console.log(imageURL);

            /*const image = document.createElement('img');
            image.src = imageURL;*/

            document.getElementById('image').innerHTML = `<img src=${imageURL}>`;
        })
}

export { getImage }