function mostrar() {
  let nota;
  let maximo;
  let minimo;

  maximo = 10;
  minimo = 1;
  //nota = Math.round (Math.random() * (maximo-minimo) + minimo);
  nota = Math.round(Math.random() * 9 + 1);

  if (nota == 9 || nota == 10) {
    alert(nota + " Excelente");
  } else if (nota >= 4 && nota <= 8) {
    alert(nota + " aprobó");
  } else {
    alert(nota + " Vamos, la proxima se puede");
  }
} //FIN DE LA FUNCIÓN
