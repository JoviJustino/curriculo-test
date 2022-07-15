function animacao(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * i);
  });
}

const titulo = document.querySelector(".title");
const subtitulo = document.querySelector(".title2");

animacao(subtitulo);
