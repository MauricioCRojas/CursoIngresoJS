/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;

	nombre = document.getElementById("txtIdNombre").value;
	alert(nombre);

	//para dejar en blanco la caja de texto
	//document.getElementById("txtIdNombre").value= "";

}


