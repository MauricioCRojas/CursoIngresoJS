/*
function mostrar() {
	let numero1;
	let numero2;
	let numero3;
	let numero4;
	let numero5;  
	let suma;
	*/
  /*
  numero1 = parseInt(prompt("Ingrese un numero: "));
  numero2 = parseInt(prompt("Ingrese un numero: "));
  numero3 = parseInt(prompt("Ingrese un numero: "));
  numero4 = parseInt(prompt("Ingrese un numero: "));
  numero5 = parseInt(prompt("Ingrese un numero: "));
  //suma = numero1 + numero2 + numero3 + numero4 + numero5;
} //FIN DE LA FUNCIÓN
*/

function mostrar() {
	let numero = 0;
	let i = 1;
  
	while (i <= 5) {
	  numero = numero + parseInt(prompt("Ingrese un numero: "));
	  i++;
	}
  
	document.getElementById("txtIdSuma").value = numero;
	document.getElementById("txtIdPromedio").value = numero / 5;
  } 