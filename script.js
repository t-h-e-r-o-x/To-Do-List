var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var but=document.getElementsByClassName("butt");


function deleteItemAfterClick(event){
event.target.parentElement.remove();
}

function strikeThrough(event){
	if(event.target.getAttribute("class")==="done"){
		event.target.classList.remove("done");
	}
	else{
		event.target.setAttribute("class","done");
}
}

for(var i=0; i< but.length; i++){
	but[i].addEventListener("click",deleteItemAfterClick);
	but[i].parentElement.addEventListener("click",strikeThrough);
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var debut=document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(debut);
	debut.appendChild(document.createTextNode("Delete"));
	debut.setAttribute("class","butt");
	debut.addEventListener("click",deleteItemAfterClick);
	ul.appendChild(li);
	li.addEventListener("click",strikeThrough);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
