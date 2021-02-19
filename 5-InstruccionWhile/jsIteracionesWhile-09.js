/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
  let numero;
  let maximo;
  let minimo;
  let respuesta;
  let flag = 0;

  do {
    numero = parseInt(prompt("Ingrese un numero"));
    if (flag == 0) {
      maximo = numero;
      minimo = numero;
      flag = 1;
    } else if (numero < minimo) {
      minimo = numero;
    } else if (numero > maximo) {
      maximo = numero;
    }
    respuesta = prompt("¿Quiere ingresar otro numero?");
  } while (respuesta == `s`);

  document.getElementById("txtIdMaximo").value = maximo;
  document.getElementById("txtIdMinimo").value = minimo;
}


/*
if (flag == 0 || numero < minimo) {
	maximo = numero;
}
if (flag == 0 || numero > minimo) {
	minimo = numero;
	flag = 1;
}
*/ //usar este


// while cuando no sé la cantidad de repeticiones
// for cuando la conozco
// do wile cuando el codigo se tiene que ejecutar al menos una vez