'use strict';

var catbutton = document.getElementById('catbutton');

function handleCatbuttonClick(){
  allCats = JSON.parse(localStorage.cats);
  console.log(allCats);
  for (var i = 0; i < allCats.length; i++){
    allCats[i].render();
  }
}

catbutton.addEventListener('click', handleCatbuttonClick)
