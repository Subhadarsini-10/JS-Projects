//having reference with button in html.

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//outputDiv.innerText = "Subhadarsini Pattnaik";

function clickHandler() {
  outputDiv.innerText = "hjfhsudfhsdf " + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);
