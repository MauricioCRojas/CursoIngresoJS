function mostrar() {
  //tomo la edad
  let edad;
  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad >= 18) {
    alert("Es mayor");
  } else if (edad >= 13 && edad <= 17) {
      alert("es adolescente");
    } else {
      alert("Es niño");
    }
  
}
