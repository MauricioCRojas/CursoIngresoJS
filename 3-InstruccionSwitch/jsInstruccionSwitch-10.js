function mostrar() {
  let estacion;
  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;
 mensaje = "No se viaja";
  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        alert("Se viaja");
      } else {
        alert("No se viaja");
      }
      break;

    case "Otoño":
      alert("Se viaja");

      break;

    case "Verano":
      if (destino == "Cataratas" || destino == "Mar del plata") {
        alert("Se viaja");
      } else {
        alert("No se viaja");
      }
      break;

    case "Primavera":
      if (destino != "Bariloche") {
        alert("Se viaja");
      } else {
        alert("No se viaja");
      }
      break;
  }
} //FIN DE LA FUNCIÓN
