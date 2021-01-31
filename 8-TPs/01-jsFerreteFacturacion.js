/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let producto1;
    let producto2;
    let producto3;
    let sumadeproductos;

    producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumadeproductos = producto1 + producto2 + producto3

    alert("La suma de los productos es: "+sumadeproductos)
}
function Promedio () 
{
    let producto1;
    let producto2;
    let producto3;
    let promediodeproductos;

    producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    promediodeproductos = (producto1 + producto2 + producto3) / 3

    alert("el promedio de los productos es: "+promediodeproductos)
}
function PrecioFinal () 
{
	let producto1;
    let producto2;
    let producto3;
    let sumadeproductos;
    let sumaeiva;

    producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumadeproductos = producto1 + producto2 + producto3;
    sumaeiva= sumadeproductos + (sumadeproductos * 21/100);

    alert("el precio final es: "+sumaeiva);
}