const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
]

const date = new Date('Nov 16, 2014');

const currentDay = date.getDay();

console.log(days[currentDay])