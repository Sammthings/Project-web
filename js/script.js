var DropButton = document.querySelector('.nav-button'); // Selecteerd de button
var DropDown = document.querySelector('.drop-down'); //Selecteerd de hidden content 

var ul = document.getElementById("tags");
var items = ul.getElementsByTagName("li");

function toogleclass() {

	DropDown.classList.toggle('slide');
	DropButton.classList.toggle('active');

}

var item = document.getElementsByClassName("tag-select");

for (var i = 0; i < item.length; i++) {
  //For each element in the item array, add an onclick event.
  item[i].onclick = function(event) {
    this.classList.toggle('active');
  }
}

var item = document.getElementsByClassName("heart_btn");

for (var i = 0; i < item.length; i++) {
  //For each element in the item array, add an onclick event.
  item[i].onclick = function(event) {
    this.classList.toggle('active');
  }
}


DropButton.addEventListener("click", toogleclass, false);