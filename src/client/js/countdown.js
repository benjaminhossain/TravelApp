const countdown = function (departure) {
    const today = new Date ();
    const newDepartureDate = new Date (departure);
    //console.log("Departure Date: " + newDepartureDate);
    
    const distance = newDepartureDate - today;
    const daysAway = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById('daysLeft').innerText = `${daysAway} days away from today.`
    console.log(daysAway + " days away")
    return daysAway;
}


export { countdown }

//source: https://www.w3schools.com/howto/howto_js_countdown.asp