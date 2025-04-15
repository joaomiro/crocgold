document.addEventListener("DOMContentLoaded", function () {
  const secao = document.querySelector("#servicos");

  if (secao) {
    console.log("A secção 'serviços' está disponível.");
    console.log(secao.getBoundingClientRect());
    // aqui podes fazer mais coisas se quiseres
  }
});
