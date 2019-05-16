'use strict';

catform.addEventListener('submit', handleCatSubmit);

if (localStorage.cats) {
  allCats = JSON.parse(localStorage.cats);
  for (var i = 0; i < allCats.length; i++) {
    allCats[i].render();
  }
}
