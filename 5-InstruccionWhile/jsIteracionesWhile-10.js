/*
  Al presionar el botón pedir  números  
  hasta que el usuario quiera, mostrar:
  1-Suma de los negativos.
  2-Suma de los positivos.
  3-Cantidad de positivos.
  4-Cantidad de negativos.
  5-Cantidad de ceros.
  6-Cantidad de números pares.
  7-Promedio de positivos.
  8-Promedios de negativos.
  9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
  let numero;
  let sumapositivos = 0;
  let sumanegativos = 0;
  let contadorceros = 0;
  let contadorpares = 0;
  let promedionegativos = 0;
  let promediopositivos = 0;

  let diferenciaposneg;
  let respuesta;
  let contadorpos = 0;
  let contadorneg = 0;

  do {
    numero = parseInt(prompt("Ingrese un numero"));

    while (isNaN(numero)) {
      numero = parseInt(prompt("Error, ingrese un número"));
    }

    if (numero == 0) {
      contadorceros = contadorceros + 1;
    } else if (numero > 0) {
      sumapositivos = sumapositivos + numero;
      contadorpos++;
    } else {
      sumanegativos = sumanegativos + numero;
      contadorneg++;
    }
    if (numero % 2 == 0) {
      contadorpares++;
    }
    respuesta = prompt("¿Quiere ingresar otro número?").toLowerCase();
  } while (respuesta == "s");

  if (contadorpos > 0) {
    promediopositivos = sumapositivos / contadorpos;
  }
  if (contadorneg > 0) {
    promedionegativos = sumanegativos / contadorneg;
  }
  diferenciaposneg = contadorpos - contadorneg;
  console.log("Cantidad de ceros: " + contadorceros);
  console.log("Cantidad de positivos: " + contadorpos);
  console.log("Cantidad de negativos: " + contadorneg);
  console.log("Cantidad de Pares: " + contadorpares);
  console.log("Suma de positivos: " + sumapositivos);
  console.log("Suma de negativos: " + sumanegativos);
  console.log("Promedio positivos: " + promediopositivos);
  console.log("Promedio de negativos: " + promedionegativos);
  console.log(
    "La diferencia entre positivos y negativos es de: " + diferenciaposneg
  );
}
//FIN DE LA FUNCIÓN
