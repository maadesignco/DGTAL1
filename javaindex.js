// JavaScript Document
function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "menusup") {
	x.className += " responsivo";
} else {
x.className = "menusup";
}
}