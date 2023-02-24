const date = new Date('Nov 17, 2014');
console.log(date.toString())
if(date.getDay() == 6 || date.getDay() == 0){
    console.log('Weekend')
}else{
    console.log('WeekDay');
}