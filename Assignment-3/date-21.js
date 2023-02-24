const datefns = require('date-fns');

const date1 = new Date(2015, 1, 15)
const date2 = new Date(2015, 2, 3)

const differenceInMinutes = datefns.differenceInMinutes(date2, date1);

console.log(differenceInMinutes, 'minutes')
