/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numerosecreto;
let numeroingresado;
let intentos;
let i = 1;

function comenzar() {
  numerosecreto = Math.round(Math.random() * 99 + 1);
  console.log(numerosecreto);
}

function verificar() {
  numeroingresado = parseInt(document.getElementById("txtIdNumero").value);
  document.getElementById("txtIdIntentos").value = i++;
  intentos = parseInt(document.getElementById("txtIdIntentos").value);
  if (numeroingresado < numerosecreto) {
    alert("Falta para llegar al numero secreto");
  } else if (numeroingresado > numerosecreto) {
    alert("Se pasó del número secreto");
  } else if (numeroingresado == numerosecreto && intentos != 1) {
    alert("Usted es un ganador y en solo: " + intentos + " intentos");
  } else if (numeroingresado == numerosecreto && intentos == 1) {
    alert("Usted es un ganador y en solo: " + intentos + " intento");
  }
}
