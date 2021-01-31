/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en memoria
	let nombre;
	
	//guardo en la variable nombre el texto que ingrese en el ventana de prompt
	nombre = prompt("Ingrese su nombre");
	
	
	//copio el mensaje escrito en prompt en la caja de texto embebida inicial
	document.getElementById("txtIdNombre").value = nombre;

	
}

