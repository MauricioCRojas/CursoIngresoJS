/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	
	nombre= document.getElementById ("txtIdNombre").value;
	edad= document.getElementById ("txtIdEdad").value;
	
	//se me hace mas comoda esta
	
	alert("usted se llama "+nombre + " y tiene "+edad + " años");
	
	//igual debería usar esta
	//alert(`usted se llama ${nombre} y tiene ${edad} años`); //otra opcion //

	
}

