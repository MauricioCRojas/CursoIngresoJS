function mostrar() {
  let numero;
let contadorpares=0;

  numero = parseInt(prompt("Ingrese número"));
  while (isNaN (numero) || numero<=0){
	numero = parseInt(prompt("Ingrese solo números positivos"));

  }

  for (let i = 1; i <= numero; i++) {
    if (i % 2 == 0) {
		contadorpares++
		console.log(i);
    }
}
console.log("La cantidad de pares encontrados son: " + contadorpares);
} //FIN DE LA FUNCIÓN

