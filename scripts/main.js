var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myHeading.textContent = 'hello World';

var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute ("src");
    if (mySrc === "imagens/download.jfif") {
        myImage.setAttribute ("src","images/27175423740299.jpg");
    } else {
        myImage.setAttribute ("src","images/download.jfif");
    }
}

function setUserName() {
    var myName = prompt('Por favor, digite seu nome.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }
