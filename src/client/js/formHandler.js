function handleSubmit(event) {
    event.preventDefault()

    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const departure = document.getElementById('departureDate').value;

    let formInput = {
        city: city,
        country: country
    }

    if (Client.formChecker(formInput).length === 0) {
        Client.getCoordinates(city, country)
        Client.getImage(city)
        Client.countdown(departure)
    } else {
        alert('Not a valid entry')
    }
}

export { handleSubmit }