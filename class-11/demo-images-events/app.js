'use strict';

// Global variables
var goatpic = document.getElementById('goatpic');
var goatArray = [];

// Constructor
function GoatPicture(name){
  this.name = name;
  this.filepath = `images/${name}.jpg`;
  this.timesShown = 0;
  goatArray.push(this);
}

// Instances
new GoatPicture('kissing-goat');
new GoatPicture('cruisin-goat');
new GoatPicture('float-your-goat');
new GoatPicture('goat-out-of-hand');
new GoatPicture('sassy-goat');
new GoatPicture('smiling-goat');
new GoatPicture('sweater-goat');

// Show a random goat
function showARandomGoat(){
  // generate a random number
  var randomIndex = Math.floor(Math.random() * goatArray.length);
  // assign src
  goatpic.src = goatArray[randomIndex].filepath;
  // assign title
  goatpic.title = goatArray[randomIndex].name;
  // assign alt
  goatpic.alt = goatArray[randomIndex].name;
  // increment time shown
  goatArray[randomIndex].timesShown++;
}

// Event handler
function handleGoatClick(event){
  if(event.target.alt === 'sassy-goat'){
    alert('BAAAAAAAAAAAAAA I AM SASSY');
  }
  showARandomGoat();
}

// Stuff that runs on page load
// Event listener
goatpic.addEventListener('click', handleGoatClick);
// Show the first goat
showARandomGoat();
