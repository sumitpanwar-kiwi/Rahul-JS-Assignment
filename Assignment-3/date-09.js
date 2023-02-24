const dates = ['2015/02/01', '2015/02/02', '2015/01/03'];

dates.sort((date1, date2) => new Date(date1) - new Date(date2));

console.log('Maximum date -',dates[dates.length -1]);