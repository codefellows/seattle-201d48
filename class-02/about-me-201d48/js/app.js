'use strict';

alert('Welcome! Let\'s play a guessing game so you can learn more about me?');

var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started!');

var answerOne = prompt('Do I have more than three pets?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  // Tell them
  alert('You got it right! I have a dog and four cats for a total of five beasts!');
  // console.log the result
  console.log('The user got Question 1 correct');
} else {
  // Tell them
  alert('YOU FAIL. I have 5 beasts');
  // console.log the result
  console.log('The user got Question 1 wrong');
}
