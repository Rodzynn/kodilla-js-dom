// plik scripts.js

var buttonText = document.getElementsByClassName('button');
var x = buttonText.length;


for ( var k = 0 ; k < x ; k++) {
  var text = buttonText[k].innerText;
  alert("Button Text: " + text);

}