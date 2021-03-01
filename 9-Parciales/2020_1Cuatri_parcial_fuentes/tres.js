/* Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar() {
  let nombre;
  let edad;
  let sexo;
  let estadoCivil;
  let temperatura;
  let maxTemperatura;
  let nombrePersConTemp;
  let contMayoresViudos = 0;
  let contHombresViudos = 0;
  let contSolteros = 0;
  let contViudos =0;
  let contCasados=0;
  let contHombresSolteros = 0;
  let acumEdadSolteros = 0;
  let acumSolterosViudos;
  let contAdultosMayoresConTemp = 0;
  let promedioEdadSolteros;
  let seguir;
  let flag = 0;

  do {
    nombre = prompt("Ingrese su nombre");
    while (!isNaN(nombre)) {
      nombre = prompt("Error. Ingrese su nombre");
    }
    edad = parseInt(prompt("Ingrese su edad"));
    while (isNaN(edad) || edad < 0) {
      edad = parseInt(prompt("Error. Ingrese su edad"));
    }
    sexo = prompt("Ingrese su sexo f/m").toLowerCase();
    while (!(sexo == "f" || sexo == "m")) {
      sexo = prompt("Error. Ingrese su sexo f/m").toLowerCase();
    }
    estadoCivil = prompt("Ingrese su estado civil soltero/casado/viudo");
    while (
      !(
        estadoCivil == "soltero" ||
        estadoCivil == "casado" ||
        estadoCivil == "viudo"
      )
    ) {
      estadoCivil = prompt(
        "Error. Ingrese su estado civil soltero/casado/viudo"
      );
    }
    temperatura = parseFloat(prompt("Ingrese su temperatura"));
    while (isNaN(temperatura) || temperatura < 0) {
      temperatura = parseFloat(prompt("Error. Ingrese su temperatura"));
    }
    switch (estadoCivil) {
      case "soltero":
        contSolteros++;
        if (sexo == "m") {
          contHombresSolteros++;
          acumEdadSolteros += edad;
        }

        break;
      case "viudo":
        contViudos++;
        break;
      case "casado":
        contCasados++;
        break;
    }
    if (flag == 0 || temperatura > maxTemperatura) {
      maxTemperatura = temperatura;
      nombrePersConTemp = nombre;
      flag = 1;
    }

    if (sexo == "m" && estadoCivil == "viudo") {
      contHombresViudos++;
    }
    if (edad >= 18 && estadoCivil == "viudo") {
      contMayoresViudos++;
    }
    if (edad >= 60 && temperatura >= 38) {
      contAdultosMayoresConTemp++;
    }

    seguir = prompt("¿Quiere ingresar otro pasajero s/n?");
  } while (seguir == "s");

  acumSolterosViudos = contHombresViudos + contHombresSolteros;
if (contSolteros!=0){
  promedioEdadSolteros = acumEdadSolteros / contHombresSolteros;
  console.log(
    "El promedio de edad entre los hombres solteros es de: " +
      promedioEdadSolteros);
}
else {
  console.log("No se ingresaron solteros");
}
  console.log(
    "El nombre de la persona con más temperatura es de: " +
      nombrePersConTemp +
      " y su temperatura es de: " +
      maxTemperatura
  );
  console.log("La cantidad de mayores viudos es de: " + contMayoresViudos);
  console.log(
    "La cantidad de hombres solteros o viudos es de: " + acumSolterosViudos
  );
  console.log(
    "La cantidad de mayores a 60 años con temperatura +38 es de: " +
      contAdultosMayoresConTemp
  );
 
}
