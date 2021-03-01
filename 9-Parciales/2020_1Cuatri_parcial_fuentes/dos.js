/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro

Estrategia de resolución:
1_ Declaración de variables (tipo, cantidad, precio, importeB, importeN, descuento, seguir)
2_ Generar un bucle mientras el usuario quiera
aca va el codigo que se ejecuta en cada iteración
3_ Pido el tipo
3.1_ Valido el tipo
4_ Pido cantidad
5_Pido precio
5.1_ Valido precio
6_ Acumulo cantidad de bolsas 
7_ Calculo importe  (precio * cantidad de bolsas)
Acumulo importe bruto
Genero un bloque para cada tipo (arena, cal, cemento) y acumulo cantidades por cada tipo
Tengo que generar un bloque al que entro en la primer iteración y otro donde entro en las restantes
En la primer iteración guardo como mayor precio, el precio de este primer producto y además guardo el tipo

*/

function mostrar() {
  let precio;
  let tipo;
  let cantidad;
  let importe;
  let subtotal = 0;
  let seguir;
  let acumC = 0;
  let acumCal = 0;
  let acumA = 0;
  let neto;
  let acumBolsas = 0;
  let descuento;
  let maxPrecio;
  let maxTipo;
  let flag = 1;
  let tipoMaxBolsas;

  do {
    tipo = prompt("Ingrese tipo cal/arena/cemento");
    while (tipo != "cal" && tipo != "arena" && tipo != "cemento") {
      tipo = prompt("Error. Ingrese tipo cal/arena/cemento");
    }
    cantidad = parseInt(prompt("Ingrese cantidad"));
    while (isNaN(cantidad) || cantidad <= 0) {
      cantidad = parseInt(prompt("Error.Ingrese cantidad"));
    }
    precio = parseInt(prompt("Ingrese precio"));
    while (isNaN(precio) || precio <= 0) {
      precio = parseInt(prompt("Error.Ingrese precio"));
    }
    importe = precio * cantidad;
    subtotal = subtotal + importe;

    switch (tipo) {
      case "arena":
        acumA = acumA + cantidad;
        break;

      case "cal":
        acumCal = acumCal + cantidad;
        break;

      case "cemento":
        acumC = acumC + cantidad;
        break;
    }

    if (flag  || precio > maxPrecio) {
      maxPrecio = precio;
      maxTipo = tipo;
      flag = 0;
    }

    seguir = prompt("¿Quiere comprar algo más?");
  } while (seguir == "s");
  //calculo el descuento
  if (acumBolsas < 10) {
    descuento = 0;
  } else if (acumBolsas < 30) {
    descuento = 0.15;
  } else {
    descuento = 0.25;
  }

  if (acumA > acumC && acumA > acumCal) {
    tipoMaxBolsas = "arena";
  } else if (acumC > acumA && acumC > acumCal) {
    tipoMaxBolsas = "cemento";
  } else {
    tipoMaxBolsas = "cal";
  }

  console.log("a-Importe bruto a pagar $ " + subtotal);

  if (descuento != 0) {
    neto = subtotal - subtotal * descuento;
    console.log("a-Importe neto a pagar $ " + neto);
  }
  console.log("El tipo con mas cantidad de bolsas es " + tipoMaxBolsas);
  console.log(
    "El tipo más caro es " + maxTipo + " con un valor de $ " + maxPrecio
  );
}
