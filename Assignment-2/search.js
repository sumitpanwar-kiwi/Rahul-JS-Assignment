let stories = require('./stories.json');

const searchText = process.argv[2];


const matches = stories.filter((story) =>{
    // const regex = new RegExp(`^${searchText}`, 'gi')
    return story.description.toLowerCase().includes(searchText) || story.id.toLowerCase().includes(searchText)
})
console.log(matches)

function printData(data){
    for(let i=0;i<data.length;i++){
        console.log(data[i])
    }
}

printData(matches)
