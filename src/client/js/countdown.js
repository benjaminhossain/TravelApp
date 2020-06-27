const countdown = function (departure) {
    const today = new Date ();
    const departureDate = new Date (departure);
    console.log("Departure Date: " + departureDate);
    const distance = departureDate - today;
    const daysAway = Math.floor(distance / (1000 * 60 * 60 * 24));
    //source: https://www.w3schools.com/howto/howto_js_countdown.asp

    console.log(daysAway + " days away")
    return daysAway;
}

export { countdown }