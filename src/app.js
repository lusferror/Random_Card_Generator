/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function cambioPinta(pinta, caso) {
  var superior = document.getElementById("superior");
  superior.innerHTML = pinta;
  var inferior = document.getElementById("inferior");
  inferior.innerHTML = pinta;
  if (caso === 2 || caso === 3) {
    superior.style.color = "red";
    inferior.style.color = "red";
  } else {
    superior.style.color = "black";
    inferior.style.color = "black";
  }
}
function cambiCarta() {
  document.getElementById("numero").innerHTML = Math.floor(
    Math.random() * 12 + 1
  );

  let pintaRam = Math.floor(Math.random() * 3);
  let pinta = "";
  switch (pintaRam) {
    case 1:
      pinta = "♠";
      cambioPinta(pinta, pintaRam);
      break;
    case 2:
      pinta = "♥";
      cambioPinta(pinta, pintaRam);
      break;
    case 3:
      pinta = "♦";
      cambioPinta(pinta, pintaRam);
      break;
    default:
      pinta = "♣";
      cambioPinta(pinta, pintaRam);
      break;
  }
}

window.onload = function() {
  //write your code here
  cambiCarta();
};

document.getElementById("cambio").addEventListener("click", () => {
  cambiCarta();
});

var myVar = window.setInterval(cambiCarta, 3000);

window.selecionarCarta = function() {
  clearInterval(myVar);
  let pinta = document.getElementById("selectPinta");
  let carta = document.getElementById("selectCard");
  document.getElementById("numero").innerHTML = carta.value;
  var superior = document.getElementById("superior");
  superior.innerHTML = pinta.value;
  var inferior = document.getElementById("inferior");
  inferior.innerHTML = pinta.value;
  if (pinta.value === "♥" || pinta.value === "♦") {
    superior.style.color = "red";
    inferior.style.color = "red";
  } else {
    superior.style.color = "black";
    inferior.style.color = "black";
  }
};
