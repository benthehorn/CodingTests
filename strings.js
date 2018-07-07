var sample = 'a,a,a,b,b,b,b,c,c,c,d,e,e,e,e,e';
var asArray = sample.split(',');
asArray.sort();
var counts = {};

function countAll(x) {
asArray.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);
}

function countOne(x, y) {
  var count = 0;
  asArray.forEach((x) => {
    if(x === y){
      count ++;
    }
  });
  console.log(y ,' repeats : ', count , ' times. ');
}

function permutations(str) {
  var perms = [];
  if(str.length == 1) return str;
  if(str.length == 2) return [ str, str[1] + str[0]];

  str.split('').forEach((chr, idx, arr) => {
    var sub = [].concat(arr);
    sub.splice(idx, 1);
    permutations(sub.join('')).forEach((perm) => {
      perms.push(chr + perm);
    });
  });

  console.log(perms);
}

function reverseWords(str){
  var newString = '';
  for(var i = str.length; i >= 0; i--){
    newString = newString.concat(str.charAt(i));
  }
  console.log('reversed : ', newString);
}

//countAll(asArray);
//countOne(asArray, 'b');
//permutations('bum');
reverseWords('ben is cool');