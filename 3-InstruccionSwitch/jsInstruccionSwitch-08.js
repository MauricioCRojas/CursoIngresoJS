function mostrar() {
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	 switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace Calor");
			break;
	}



/*
	if (destino == "Ushuaia" || destino == "Bariloche") {
		alert("Hace Frio");
	}
	else {
		alert("Hace Calor");
	}
*/


}

//FIN DE LA FUNCIÓN