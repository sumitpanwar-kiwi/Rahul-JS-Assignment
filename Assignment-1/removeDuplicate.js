const dup = [1, 2, 3, 4, 2, 4, 3, 5, 6, 8, 5, 6];

const arrayWithNoDup = removeDuplicates(dup)

function removeDuplicates(dup){
    const new_arr = new Array();
    for(let i=0; i<dup.length ; i++){
        if(!new_arr.includes(dup[i])){
            new_arr.push(dup[i])
        }
    }
    return new_arr;
}

console.log(arrayWithNoDup);
