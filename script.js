// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

const trocamsg = document.getElementById("troca-msg"); 

trocamsg.addEventListener("click", function() {
  const p = document.getElementsByClassName('mensagem2');
  console.log(p)
  for (let index = 0; index < p.length; index++) {
    const element = p[index];
    element.textContent = "mudando tudo";
    
  }});