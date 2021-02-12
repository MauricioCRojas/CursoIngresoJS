function mostrar() {
	let estacion;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	tarifa = 15000


	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				alert(tarifa + (tarifa * 20 / 100) + " es la tarifa");
			}
			else if (destino == "Cataratas") {
				alert(tarifa - (tarifa * 10 / 100) + " es la tarifa");
			}
			else if (destino == "Cordoba") {
				alert(tarifa - (tarifa * 10 / 100) + " es la tarifa");
			}
			else {
				alert(tarifa - (tarifa * 20 / 100) + " es la tarifa");
			}
			break;

		case "Verano":
			if (destino == "Bariloche") {
				alert(tarifa - (tarifa * 20 / 100) + " es la tarifa");
			}
			else if (destino == "Cataratas") {
				alert(tarifa + (tarifa * 10 / 100) + " es la tarifa");
			}
			else if (destino == "Cordoba") {
				alert(tarifa + (tarifa * 10 / 100) + " es la tarifa");
			}
			else {
				alert(tarifa + (tarifa * 20 / 100) + " es la tarifa");
			}
			break;

		case "Otoño":
		case "Primavera":
			if (destino != "Cordoba" ) {
				alert(tarifa + (tarifa * 10 / 100) + " es la tarifa");
			}
			else {
				alert(tarifa +" es la tarifa");
			}
			break;
	}

}//FIN DE LA FUNCIÓN