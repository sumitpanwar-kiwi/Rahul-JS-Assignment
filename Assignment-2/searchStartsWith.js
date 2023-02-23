let stories = require('./stories.json');

const searchText = process.argv[2].toLowerCase();


const matches = stories.filter((story) =>{
    // const regex = new RegExp(`^${searchText}`, 'gi')
    return story.description.toLowerCase().startsWith(searchText) || story.id.toLowerCase().startsWith(searchText)
})
console.log(matches)

function printData(data){
    for(let i=0;i<data.length;i++){
        console.log(data[i])
    }
}

printData(matches)
