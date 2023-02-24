
function isDate(date){
    return date.toString();
    
}

console.log(isDate(new Date("October 13, 2014 11:13:00")))
// Mon Oct 13 2014 11:13:00 GMT+0530 (India Standard Time)



// console.log(isDate(new Date(86400000)))
// Fri Jan 02 1970 05:30:00 GMT+0530 (India Standard Time)


// console.log(isDate(new Date(99,5,24,11,33,30,0)))
// Thu Jun 24 1999 11:33:30 GMT+0530 (India Standard Time)


// console.log(isDate(new Date([1, 2, 4, 0])))
// Invalid Date