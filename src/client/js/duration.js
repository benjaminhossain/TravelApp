const duration = function (dep, ret) {
    
    console.log(`${dep}-${ret}`)
    const newDepartureDate = new Date (dep);
    const newReturnDate = new Date (ret);

    const distance =  newReturnDate - newDepartureDate;
    const daysLong = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById('duration').innerText = `${daysLong} Days: ${dep} - ${ret}`

    console.log("duration " + daysLong)
    return daysLong;
}

export { duration }