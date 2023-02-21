let sentance = 'Today I went for a movie and I enjoy it a lot!';

function reverse(sentance){
    let reverseSentance = '';
    for(let i=0; i<sentance.length ;i++){
        reverseSentance = sentance.charAt(i) + reverseSentance;
    }
    return reverseSentance;
}

const reversed_Sentance = reverse(sentance);
console.log(reversed_Sentance);
