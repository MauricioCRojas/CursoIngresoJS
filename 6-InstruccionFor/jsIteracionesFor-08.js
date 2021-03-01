function mostrar()
{
	let numero;
	let contadorprimos=0;
	
	  numero = parseInt(prompt("Ingrese número"));
	  while (isNaN (numero) || numero<=0){
		numero = parseInt(prompt("Ingrese solo números positivos"));
	
	  }
	  for (let i=1 ; i <= numero ; i++){
		if (numero % i ==0 && numero % numero == 0){
			console.log (i);
			contadorprimos++;
		}
	  }
	  if (contadorprimos == 2){
		  console.log ("Es un numero primo");
	  }
	  else {
		  console.log ("No es primo");
	  }

}//FIN DE LA FUNCIÓN