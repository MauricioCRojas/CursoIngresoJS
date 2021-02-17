/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  let numero;
  let sumadepositivos = 0;
  let productodenegativos = 1;
  let respuesta;
  let flag = 0;

  do {
    numero = parseInt(prompt("Ingrese numero: "));
    if (numero >= 0) {
      sumadepositivos = sumadepositivos + numero;
    } else {
		productodenegativos = productodenegativos * numero;
		flag=1;
    }
    respuesta = prompt("¿Quiere agregar otro numero?");
  } while (respuesta == "s");
  if (flag==00){
	  productodenegativos = 0;
  }
  document.getElementById("txtIdSuma").value = sumadepositivos;
  document.getElementById("txtIdProducto").value = productodenegativos;
} //FIN DE LA FUNCIÓN
