const year = 2016;

function checkYear( year) {

    if (year % 400 == 0)
        return true;

    if (year % 100 == 0)
        return false;

    if (year % 4 == 0)
        return true;

    return false;
};

if(checkYear(year)){
    console.log(366)
}else{
    console.log(365)
}
