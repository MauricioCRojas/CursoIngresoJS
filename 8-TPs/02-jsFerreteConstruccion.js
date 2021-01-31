/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular 
y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y 
se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar 
cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    let ancho;
    let largo;
    let cantidaddealambre;

    ancho = parseInt(document.getElementById("txtIdAncho").value);
    largo = parseInt(document.getElementById("txtIdLargo").value);

    cantidaddealambre = (ancho + ancho + largo + largo) * 3
    alert("Cantidad de metros de alambre necesario: " + cantidaddealambre)


}
function Circulo() {

    let perimetro;
    let radio;
    let alambre;
    const PI = 3.14;
    radio = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2 * PI * radio
    alambre = perimetro * 3
    alert("Cantidad de metros de alambre necesario: " + alambre)



}
function Materiales() {
    let bolsasdecemento;
    let bolsasdecal;
    let largo;
    let ancho;
    let perimetro;



    ancho = parseInt(document.getElementById("txtIdAncho").value);
    largo = parseInt(document.getElementById("txtIdLargo").value);

    perimetro = ancho * largo;

    bolsasdecemento = perimetro * 2;
    bolsasdecal = perimetro * 3;

    alert("Bolsas de cemento necesarias: " +bolsasdecemento + " y de cal:" + bolsasdecal);
}