/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  let numero = 0;
  let i = 0;
  let respuesta;
  //let acumulador =0;

  do {
    numero = numero + parseInt(prompt("Ingrese un numero: "));
    //acumulador= acumulador + numero
    i++;
    respuesta = prompt("¿Quiere sumar otro numero?");
  } while (respuesta == "s");

  document.getElementById("txtIdSuma").value = numero;
  document.getElementById("txtIdPromedio").value = numero / i;
} //FIN DE LA FUNCIÓN
