const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
function getMonthName(date){
    const index = date.getMonth();
    if(!index)
        {
            return 'Invalid month'
        }
        
    return months[index];
}

date = '13/11/2009'

console.log(getMonthName(new Date(date)))