

/**
 * Return the day of the week given the date
 * 0 = Sunday, 1 = Monday, ... ,6 = Saturday
 * @param {int} month 
 * @param {int} day 
 * @param {int} year 
 */
function getDay(month, day, year){
    if (month < 3) year--;
    month = (month - 3) % 12;
    month++;

    return (day + Math.floor(2.6*month-0.2)-2*Math.floor(year/100) + year%100 + Math.floor(year%100 / 4) + Math.floor(Math.floor(year/100) / 4)) % 7

}
console.log(getDay(6,26,2024));

module.exports = getDay;