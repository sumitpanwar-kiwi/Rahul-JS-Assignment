const string1 = process.argv[2];
// const string2 = 'javasumit';
const ans = addJava(string1);

function addJava(string){
    if( string.length>3 && string.substring(0,4) == 'java'){
        return string;
    }else{
        return 'java'+string
    }
}

console.log(ans);
// console.log();