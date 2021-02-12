function mostrar() {
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {

		case "Ushuaia":
		case "Mar del plata":
			alert("SUR");
			break;
		case "Cataratas":
		case "Bariloche":
			alert("NORTE");
			break;
	}




}//FIN DE LA FUNCIÓN