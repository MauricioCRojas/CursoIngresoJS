function mostrar()
{
let precio;
let descuento;
let preciocondescuento;

precio = parseInt (prompt("Ingrese precio"));
descuento = parseInt (prompt("Ingrese porcentaje de descuento"));

preciocondescuento = precio - (precio * descuento/100);
alert ("El precio final con descuento es: " + preciocondescuento);

}
