var words=["javascript","monkey","amazing","pancake"];
console.log(words);
var item=words[Math.floor(Math.random()*words.length)];
var prog=0;
while(prog<=0){
  console.log("You chose a word");
  prog++;
}
if(confirm("Are you sure you want to quit the game?")){
    console.log("Quit the game");
  }
  else{
    var single=false;
  if(single){
    console.log("Pick a single letter");
  }
  else{
    console.log(item);
  }
  var congratulations="congratulations! you guessed the word!";
console.log(congratulations.toUpperCase());
}
