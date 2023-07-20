var numero = 20;
var numero2 = 10;

numero += numero2;
console.log(numero);

var idade = 19;
var dirigindo = 'nao';

var podeBeber = (idade >= 18 && dirigindo !== 'sim') ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)

var possuiFacul = true;
if(possuiFacul)
  console.log('Sim possui')
else
  console.log('Nao possui')

  // Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll = scroll += 500
console.log(scroll)
// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

var darCredito = (possuiCarro && possuiCasa);
console.log(darCredito)
