const datefns = require('date-fns');

const date1 = new Date('04/02/2014');
const date2 = new Date('04/04/2014');

const differenceInDays = datefns.differenceInDays(date2, date1);
console.log(differenceInDays)