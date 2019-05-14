'use strict';

// Global variables
var goatpic = document.getElementById('goatpic');
var goatpicTwo = document.getElementById('goatpic-two');
var containerElement = document.getElementById('container');
var goatArray = [];
var votesRemaining = 25;
var randomIndexArray = [];

// Constructor
function GoatPicture(name){
  this.name = name;
  this.filepath = `images/${name}.jpg`;
  this.timesShown = 0;
  this.votes = 0;
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
function showARandomGoat(imageElement){
  // generate a random number
  var randomIndex = Math.floor(Math.random() * goatArray.length);

  // makes sure the random number has not been shown previously or currently
  while(randomIndexArray.includes(randomIndex)){
    randomIndex = Math.floor(Math.random() * goatArray.length);
  }
  randomIndexArray.unshift(randomIndex);

  // assign src
  imageElement.src = goatArray[randomIndex].filepath;
  // assign title
  imageElement.title = goatArray[randomIndex].name;
  // assign alt
  imageElement.alt = goatArray[randomIndex].name;
  // increment time shown
  goatArray[randomIndex].timesShown++;

  while(randomIndexArray.length > 4){
    randomIndexArray.pop();
  }
  
}

function renderResults(){
  var ulEl = document.createElement('ul');
  containerElement.appendChild(ulEl);

  for(var i = 0; i < goatArray.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${goatArray[i].name} got ${goatArray[i].votes} votes`;
    ulEl.appendChild(liEl);
  }
}

// Event handler
function handleGoatClick(event){
  votesRemaining--;

  if(votesRemaining === 0){
    renderResults();
    containerElement.removeEventListener('click', handleGoatClick);
  }

  var goatName = event.target.alt;
  console.log("my event target alt", event.target.alt);
  
  for(var i = 0; i < goatArray.length; i++){
    if(goatArray[i].name === goatName){
      goatArray[i].votes++;
    }
  }

  // when I reach 25 votes, I need to run a function that renders the goat's name and the number of votes
  showARandomGoat(goatpic);
  showARandomGoat(goatpicTwo);
}

// Stuff that runs on page load
containerElement.addEventListener('click', handleGoatClick);
// Show the first goat
showARandomGoat(goatpic);
showARandomGoat(goatpicTwo);
