
function mostrar()
{
let ancho;
let largo;
let perimetro;

ancho = parseFloat(prompt("Ingrese ancho"));
largo = parseFloat(prompt("Ingrese largo"));

perimetro = (ancho * 2) + (largo*2);
alert("El perimetro es: " + perimetro);
}
