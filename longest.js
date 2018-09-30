
function longest(countries){
  var count = [];
  for(var i = 0; i < countries.length; i++){
    count.push(countries[i].length);
  }
  var max = Math.max(...count);
  var index = count.indexOf(max);
  return countries[index];
}

  var countries = ["Australia", "Germany", "United States of America"];
  console.log(longest(countries));

