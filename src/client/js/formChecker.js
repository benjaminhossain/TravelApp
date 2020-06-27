const formChecker = (formInput) => {
    let errors =[]

    if (!formInput.city) {
        errors.push('')
    }
    if (!formInput.country) {
        errors.push('')
    }
    if (!formInput.departureDate) {
        errors.push('')
    }
    if (!formInput.returnDate) {
        errors.push('')
    }

    return errors;
}

export { formChecker }