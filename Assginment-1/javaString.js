const string1 = 'sumit';
const string2 = 'javasumit';
const ans = addJava(string2);

function addJava(string){
    if(string.substring(0,4) == 'java'){
        return string;
    }else{
        return 'java'+string
    }
}

console.log(ans);