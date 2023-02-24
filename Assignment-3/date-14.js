const datefns = require('date-fns');

const date = new Date();

const firstDate = new Date(date.getFullYear(), 0, 1);

const diff = datefns.differenceInDays(date, firstDate)
console.log(diff, 'days');
