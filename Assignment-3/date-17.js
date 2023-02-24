const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Satday'
]

const date = new Date('Nov 16, 2014');

const currentDay = date.getDay();

console.log(days[currentDay])