const _ = require('lodash');
let data = require('./data.json');

function sortData(data){

    const len = data.length;
    for(let i=0; i<len ;i++){
        data[i].stories = _.sortBy(data[i].stories, 'storyId')
    }
    return _.sortBy(data, 'groupId')

}

const sortedData = sortData(data);

function printData(data){
    for(let i=0;i<data.length;i++){
        console.log(data[i])
    }
}

printData(sortedData)
