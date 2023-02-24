function formatDate(date){
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const tarik = date.getDate();

    return {
        tarik,
        month,
        year
    }

}

function formatDateIntoSlash(date){
    const fullDate = formatDate(date);
    return `${fullDate.month}/${fullDate.tarik}/${fullDate.year}`
}

function formatDateIntoDash(date){
    const fullDate = formatDate(date);
    return `${fullDate.month}-${fullDate.tarik}-${fullDate.year}`
    
}

console.log(formatDateIntoSlash(new Date))
console.log(formatDateIntoDash(new Date))