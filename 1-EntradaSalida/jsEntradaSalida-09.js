/*
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {

	let sueldo;
	let sueldoconaumento;

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	sueldoconaumento = sueldo + (sueldo*10/100);
	document.getElementById("txtIdResultado").value = sueldoconaumento;

}
