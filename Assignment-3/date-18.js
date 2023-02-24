const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
function getMonthName(date){
    const index = date.getMonth();
    if(index ==0)
        return months[0]

    if(!index)
        {
            return 'Invalid month'
        }
        
    return months[index];
}

date = '3/11/2009'

console.log(getMonthName(new Date(date)))