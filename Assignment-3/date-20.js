const date = new Date();
const splitDate = date.toString().split('(');

const timeZone = splitDate[1].substring(0,splitDate[1].length -1);

console.log(timeZone)