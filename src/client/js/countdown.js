const countdown = function (departure) {
    const today = new Date ();
    const newDepartureDate = new Date (departure);
    //console.log("Departure Date: " + newDepartureDate);
    
    const distance = newDepartureDate - today;
    const daysAway = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById('daysLeft').innerText = `You are ${daysAway} days away from your next adventure!`
    console.log(daysAway + " days away")

    return daysAway;
}


export { countdown }

//source: https://www.w3schools.com/howto/howto_js_countdown.asp