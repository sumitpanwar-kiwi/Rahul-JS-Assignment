const _ = require('lodash');
let stories = require('./stories.json');

const searchText = process.argv[2].toLowerCase();
console.log(searchText)

const matches = _.filter(stories, story => story.description.toLowerCase().includes(searchText) || story.id.toLowerCase().includes(searchText))


function printData(data){
    for(let i=0;i<data.length;i++){
        console.log(data[i])
    }
}

printData(matches)
