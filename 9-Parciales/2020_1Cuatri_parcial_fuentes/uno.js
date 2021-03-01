/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/


function mostrar()
{
	let producto;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let precioAlcohol;
	let fabricantealcohol;
	let acumAlcohol=0;
	let acumBarbijos=0;
	let acumJabon=0;
	let contAlcohol=0;
	let contBarbijos=0;
	let contJabon=0;
	let maxTipo;
	let promediocompra;
	let flag =0;
	let mensajea= "No se compraron alcoholes";
	let mensajeb;
	let mensajec;

	for ( let i = 1 ; i <=1 ; i++){
	producto = prompt("Ingrese producto a comprar: barbijos/jabón/alcohol");
	while ( producto != "barbijos" && producto != "jabon" && producto != "alcohol"){
		producto = prompt("Error. Ingrese producto a comprar: barbijos/jabón/alcohol");
	}
	precio = parseFloat (prompt("Ingrese precio"));
	while (isNaN(precio) || precio < 100 || precio > 300){
		precio = parseFloat (prompt("Error.Ingrese precio"));
	}
	unidades = parseInt (prompt("Ingrese cantidad de unidades"));
	while (isNaN(unidades) || unidades <= 0 || unidades > 1000){
		unidades = parseInt (prompt("Error. Ingrese cantidad de unidades"));
	}
	
	marca = prompt("Ingrese marca");
	fabricante= prompt("Ingrese fabricante");
	
switch (producto){
	case "alcohol":
		acumAlcohol+= unidades;
		fabricantealcohol=fabricante;
		precioAlcohol= precio;
		contAlcohol++
		if (flag==0 || precioAlcohol < precioAlcoholBarato){
		precioAlcoholBarato = precioAlcohol;
		fabricanteAlcoholBarato = fabricantealcohol;
		cantidadAlcoholBarato = acumAlcohol;
		flag = 1;
		}
		break;

	case "barbijos":
		acumBarbijos+= unidades;
		contBarbijos++
		break;
	case "jabon":
		acumJabon+= unidades;
		contJabon++
		break;
		
}

}

if (acumAlcohol > acumBarbijos && acumAlcohol > acumJabon){
	maxTipo = "Alcohol"
	promediocompra = acumAlcohol/contAlcohol;

}
else if (acumJabon > acumBarbijos && acumJabon >= acumAlcohol){
maxTipo ="Jabon"
promediocompra = acumJabon/contJabon;

}
else {
maxTipo ="Barbijos"
promediocompra= acumBarbijos/contBarbijos;
}
	
	if (contAlcohol != 0){
	mensajea= ("La cantidad de alcohol barato es: " + cantidadAlcoholBarato + " y el fabricante es: " + fabricanteAlcoholBarato);
	}


mensajeb="La cantidad de jabones es de: " + acumJabon;
mensajec="El producto más comprado fue: " + maxTipo + " y el promedio de compra es de: " + promediocompra;

alert (mensajea + "\n" + mensajeb + "\n" + mensajec);
}