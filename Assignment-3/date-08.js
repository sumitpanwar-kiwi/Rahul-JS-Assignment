const days = [
    'Sunday',
    'Monday',
    'Tueday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const date = new Date('Nov 16, 2014');

const currentDay = date.getDay();

if(currentDay ==0){
    console.log(days[6])
}else{
    console.log(days[currentDay-1])
}