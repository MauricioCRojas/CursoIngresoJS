var numeroalazar;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
	numeroalazar= Math.round(Math.random() * 2+1);
    console.log (numeroalazar);
    if (numeroalazar == 3){
        console.log ("tijera");
    }
    else if (numeroalazar == 1){
        console.log ("piedra");
    }
    else {
        console.log("papel");
    }



}//FIN DE LA FUNCIÓN
function piedra()
{
	if (numeroalazar == 3){
        ContadorDeGanadas++;
		alert ("ganó");
    }
    else if (numeroalazar == 1){
		ContadorDeEmpates++;
        alert ("empató");
    }
    else {
		ContadorDePerdidas++;
        alert("perdió");
    }
	 
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value =ContadorDeEmpates;
}//FIN DE LA FUNCIÓN
function papel()
{
    if (numeroalazar == 1){
		ContadorDeGanadas++;
        alert ("ganó");
    }
    else if (numeroalazar == 2){
		ContadorDeEmpates++;
        alert ("empató");
    }
    else {
		ContadorDePerdidas++;
        alert("perdió");
    }

	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value =ContadorDeEmpates;
}//FIN DE LA FUNCIÓN
function tijera()
{
	if (numeroalazar == 2){
		ContadorDeGanadas++;
        alert ("ganó");
    }
    else if (numeroalazar == 3){
        ContadorDeEmpates++;
		alert ("empató");
    }
    else {
		ContadorDePerdidas++;
        alert("perdió");
    }
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value =ContadorDeEmpates;
	
}

//FIN DE LA FUNCIÓN