var nome = "Thulio";

var nomeMinusculo = nome.toLocaleLowerCase;

var altura = 1.8;
console.log(altura.toString());

var btn = document.querySelector(".btn");

btn.addEventListener('click', function() {
  console.log('Clicou')
})

btn.classList.add('azul')

