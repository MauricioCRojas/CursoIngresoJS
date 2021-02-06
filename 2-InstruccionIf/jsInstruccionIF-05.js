function mostrar()
{
	let edad;
  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad >=18 || edad <=12){
	  alert ("No es adolescente");
  }

}//FIN DE LA FUNCIÓN