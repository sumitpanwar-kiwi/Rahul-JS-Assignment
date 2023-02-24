const datefns = require('date-fns');

const dob = new Date('2000/01/11');

const age = datefns.intervalToDuration({
    start : dob,
    end : new Date()
});

console.log(`Age - ${age.years} years, ${age.months} months and ${age.days} days`)