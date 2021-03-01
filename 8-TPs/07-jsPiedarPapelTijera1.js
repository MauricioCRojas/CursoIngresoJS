/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;
let numeroalazar;
let Piedra;
let Tijera;
let Papel;

function comenzar()
{
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
        alert ("ganó");
    }
    else if (numeroalazar == 1){
        alert ("empató");
    }
    else {
        alert("perdió");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    if (numeroalazar == 1){
        alert ("ganó");
    }
    else if (numeroalazar == 2){
        alert ("empató");
    }
    else {
        alert("perdió");
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	if (numeroalazar == 2){
        alert ("ganó");
    }
    else if (numeroalazar == 3){
        alert ("empató");
    }
    else {
        alert("perdió");
    }

}//FIN DE LA FUNCIÓN