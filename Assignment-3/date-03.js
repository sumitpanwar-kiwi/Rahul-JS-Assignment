function getNumberOfDays(month){
    switch(month.toLowerCase()){
        case 'january' :
        case 'march' :
        case 'may' :
        case 'july' :
        case 'august' :
        case 'october' :
        case 'december' : return 31
        
        case 'april' :
        case 'june' :
        case 'september' :
        case 'november' :   return 30

        case 'february' : return '28/29'

        default : return 'Please enter a valid month'
    }
}

const month = 'FebRuary'
console.log(getNumberOfDays(month))