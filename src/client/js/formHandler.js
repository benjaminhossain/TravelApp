function handleSubmit(event) {
    event.preventDefault()

    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;

    let formInput = {
        city: city,
        country: country,
        departureDate: departureDate,
        returnDate: returnDate
    }

    if (Client.formChecker(formInput).length === 0) {
        Client.getCoordinates(city, country)
        Client.getImage(city)
        Client.countdown(departureDate)
        Client.duration(departureDate, returnDate)
    } else {
        alert('Please fill in all the fields')
    }
}

export { handleSubmit }