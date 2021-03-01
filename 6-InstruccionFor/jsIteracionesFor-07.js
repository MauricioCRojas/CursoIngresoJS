function mostrar()
{
	let numero;
	let contadordivisores=0;
	
	  numero = parseInt(prompt("Ingrese número"));
	  while (isNaN (numero) || numero<=0){
		numero = parseInt(prompt("Ingrese solo números positivos"));
	
	  }
	  for (let i=1 ; i <= numero ; i++){
		if (numero % i ==0){
			console.log (i);
			contadordivisores++;
		}
	  }
	  console.log("La cantidad de divisores es de: " + contadordivisores);

}//FIN DE LA FUNCIÓN