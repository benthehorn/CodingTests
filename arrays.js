var points = new Array(100);
var label = points.length;
/*for (var i = 0; i < label; i++) {
  console.log(i + ',');
}*/

var hundred = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 29, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
  62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79,80, 81, 82, 83, 84, 85, 86, 86, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  100
];
var unsorted = [2, 4, 9, 7, 2, 0, 16, 9, 24];

function findMissing(){
var missing = [];
  for (var i = 0; i < hundred.length; i++){
   if((hundred[i +1] - hundred[i]) > 1){
     missing.push(hundred[i +1] - 1);
   }
  }

  console.log(missing)
}

function findDups(){
  var dups = [];
  for (var i = 0; i < hundred.length; i++){
    if(hundred[i +1] === hundred[i]){
      dups.push(hundred[i +1]);
    }
  }
  console.log(dups)
}

function findMaxMin(){
  var sorted = unsorted.slice().sort(function (a, b) {
    return a - b;
  });
  console.log('HIGH', sorted[sorted.length -1]);
  console.log('LOW', sorted[sorted[0]]);
}


function findPairs(inp){

  var lessThan = [];
  var pairs = [];
  var sorted = unsorted.sort(function (a, b) {
    return a -b;
  });
  for(var i = 0; i < sorted.length; i++){
    if(sorted[i] < inp) lessThan.push(sorted[i]);
  }
  for(var j = 0; j < lessThan.length; j++){
    for(var k = 0; k < lessThan.length; k++){
      if((lessThan[j] + lessThan[k]) === inp){
        pairs.push([ lessThan[j], lessThan[k]]);
      }
    }
  }
  console.log(pairs);
}

function multiDips(){
  var dups = [];
  var sorted = unsorted.sort(function (a, b) {
    return a -b;
  });
  for(var j = 0; j < unsorted.length; j++){
    if(unsorted[j] === unsorted[j+1]){
      dups.push(unsorted[j]);
    }
  }
  console.log(dups);
}
//findMissing();
//findDups();
//findMaxMin();
//findPairs(11);
multiDips();