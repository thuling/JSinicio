for (var i = 0; i <= 10; i++) {
  console.log("Numero: " + i);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

var videogames = ["Switch", "PS4", "XBOX", "3DS"];

for (var item = 0; item < videogames.length; item++) {
  console.log(videogames[item]);
  if (videogames[item] === "PS4") {
    break;
  }
}

var frutas = ["Banana", "Pera", "Maça", "Abacaxi"];

frutas.forEach(function (fruta, index, dsajdlkajsdl) {
  console.log(fruta, index);
});

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilano = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilano.forEach(function(ano) {
  console.log(`O brasil ganhou a copa de ${ano}`)
})
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (var fruta = 0; fruta < frutas.length; fruta++){
  console.log(frutas[fruta]);
  if (frutas[fruta] === 'Pera') {
   break;
 }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimafruta= frutas[frutas.length - 1];