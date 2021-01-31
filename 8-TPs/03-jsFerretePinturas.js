/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura 
en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura
 en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperaturaF;
    let temperaturaC;
    
    temperaturaF = parseFloat(document.getElementById("txtIdTemperatura").value);
    temperaturaC = (temperaturaF - 32) * 5/9

    alert("La temperatura en centigrados es: "+temperaturaC.toFixed(2));


}

function CentigradosFahrenheit () 
{
	let temperaturaF;
    let temperaturaC;
    
    temperaturaC = parseFloat(document.getElementById("txtIdTemperatura").value);
    temperaturaF = temperaturaC * 9/5 + 32

    alert("La temperatura en Fahrenheit es: "+temperaturaF.toFixed(4));
}
