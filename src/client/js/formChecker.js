const formChecker = (formInput) => {
    let errors =[]

    if (!formInput.city) {
        errors.push('Enter a city')
    }
    if (!formInput.country) {
        errors.push('Enter a country code')
    }

    return errors;
}

export { formChecker }