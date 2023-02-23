const _ = require('lodash');
let stories = require('./stories.json');

const searchText = process.argv[2].toLowerCase();
console.log(searchText)

const matches = _.filter(stories, story => story.description.toLowerCase().startsWith(searchText) || story.id.toLowerCase().startsWith(searchText))


function printData(data){
    for(let i=0;i<data.length;i++){
        console.log(data[i])
    }
}

printData(matches)
