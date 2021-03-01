function mostrar() {
  let cantidad;
  cantidad = parseInt(prompt("Ingrese cantidad de repeticiones"));

  while (isNaN(cantidad) || cantidad < 0) {
    cantidad = parseInt(prompt("Error. Ingrese un numero para cantidad de repeticiones"));
  }
  for (let i = 1; i <= cantidad; i++) {
    console.log("Hola UTN FRA");
  }
} //FIN DE LA FUNCIÓN
