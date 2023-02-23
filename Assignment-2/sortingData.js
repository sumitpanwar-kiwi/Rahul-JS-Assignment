const data = require('./data.json');

function printData(data){
    for(let i=0;i<data.length;i++){
        console.log(data[i])
    }
}

function bubbleSortByGroupId(arr) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
        if (arr[j].groupId > arr[j + 1].groupId) {
          var temp = arr[j].groupId;
          arr[j].groupId = arr[j + 1].groupId;
          arr[j + 1].groupId = temp;
        }
      }
    }
    return arr;
}

function bubbleSortByStoryId(arr) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
        if (arr[j].storyId > arr[j + 1].storyId) {
          var temp = arr[j].storyId;
          arr[j].storyId = arr[j + 1].storyId;
          arr[j + 1].storyId = temp;
        }
      }
    }
    return arr;
}

function resultData(arr){
    var len = arr.length;

    for(let i =0; i<len ;i++){
        arr[i].stories = bubbleSortByStoryId(arr[i].stories)
    }
    return arr;
}

const groudIdSortedData = bubbleSortByGroupId(data);
const finalData = resultData(groudIdSortedData);
printData(finalData)
