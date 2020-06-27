const countdown = function () {
    const today = new Date ();
    const departureDate = new date ("09/09/2020");
    console.log(departureDate);
    const distance = departureDate - today;
    const daysAway = Math.floor(distance / (1000 * 60 * 60 * 24));
    //source: https://www.w3schools.com/howto/howto_js_countdown.asp

    console.log(daysAway)
    return daysAway;
}

export { countdown }