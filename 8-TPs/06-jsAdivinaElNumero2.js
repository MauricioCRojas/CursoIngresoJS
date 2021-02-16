/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
  if (numeroingresado == numerosecreto && intentos == 1) {
    alert("usted es un Psíquico");
  } else if (numeroingresado == numerosecreto && intentos == 2) {
    alert("excelente percepción");
  } else if (numeroingresado == numerosecreto && intentos == 3) {
    alert("Esto es suerte");
  } else if (numeroingresado == numerosecreto && intentos == 4) {
    alert("Excelente técnica");
  } else if (numeroingresado == numerosecreto && intentos == 5) {
    alert("usted está en la media");
  } else if (
    numeroingresado == numerosecreto &&
    intentos >= 6 &&
    intentos <= 10
  ) {
    alert("falta técnica");
  } else if (numeroingresado == numerosecreto && intentos > 10) {
    alert("afortunado en el amor!!");
  }
}
