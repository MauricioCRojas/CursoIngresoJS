function mostrar() {
	let estacion;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;



	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				alert("Se viaja");
			}
			else {
				alert("No se viaja");
			}
			break;

		case "Otoño":
		//	if (destino == "Cataratas" || destino == "Mar del plata" || destino == "Bariloche" || destino == "Cordoba") { // muy largo
			if (destino != "doba") { // asi más facil, porque digo que si no es por ej "doba", todo sí
				alert("Se viaja");
			}
			break;

		case "Verano":
			if (destino == "Cataratas" || destino == "Mar del plata") {
				alert("Se viaja");
			}
			else {
				alert("No se viaja");
			}
			break;

		case "Primavera":
			if (destino != "Bariloche") {
				alert("Se viaja");
		
			}
			else {
				alert("No se viaja");
			}
			break;





	}
}//FIN DE LA FUNCIÓN