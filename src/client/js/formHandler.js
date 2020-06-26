function handleSubmit(event) {
    event.preventDefault()

    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    let formInput = {
        city: city,
        country: country
    }

    if (Client.formChecker(formInput).length === 0) {
        Client.getCoordinates(city, country)
    } else {
        alert('Not a valid entry')
    }
}

export { handleSubmit }