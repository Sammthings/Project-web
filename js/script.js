// Bron: Jesse van Thijn. Hij heeft mij geholpen met deze javascript code.

var DropButton = document.querySelector('.nav-button'); // Selecteerd de button
var DropDown = document.querySelector('.drop-down'); //Selecteerd de hidden content 
var likes = document.querySelectorAll(".heart_btn")
var notification = document.querySelectorAll(".notification")

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
// Bron: Mick Tozer. Hij heeft mij geholpen met dit gedeelte van de code.\\
if (likes[0]) {
    for (var i = 0; i < likes.length; i++) {
    	if(!likes[i].value)
    	{
			likes[i].value = "false";
    	}

        likes[i].addEventListener("click", function() {
            var that = this;
            var span = that.querySelector("span");
            var num = parseInt(span.innerHTML);
    		if(that.value == "true")
    		{
    			num -= 1;
    			span.innerHTML = num;
				adjustNotification(that, -1);
				that.value = "false";
    		}
    		else
    		{
    			num += 1;
    			span.innerHTML = num;
				adjustNotification(that, 1);
				that.value = "true";
    		}
            
        });
    }
}

function adjustNotification (object, addition){
    var div = document.querySelector(".notification p");
    var not = parseInt(div.innerHTML);
    not += addition;
    div.innerHTML = not;
}

DropButton.addEventListener("click", toogleclass, false);