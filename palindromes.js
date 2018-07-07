
for(var i = 999; i > 900; i--){
  for(var j = 999; j > 900; j--){
  if(String((i * j)) === String((i * j)).split("").reverse().join("")){
    console.log('I : ', i , 'J : ', j, '  ',  i * j);
    
  }
  }
}