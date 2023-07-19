function areaQuadrado(ld) {
  return ld * ld;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}
var total = 5 * pi();

console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(69, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto de azul";
  } else if (cor === "verde") {
    return "Essa é a minha cor favorita";
  } else {
    return "Não sei qual sua cor preferida";
  }
}

addEventListener("click", function () {
  console.log("Clicou no botão");
});

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade";
  } else if (idade >= 60) {
    return "Voce faz parte da terceira idade";
  } else {
    return "Ainda não chegou na hora de você fazer parte da rerceira idade";
  }
}

console.log(terceiraIdade(90));

function faltaVisitar(paisesFui) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesFui} países`;
}

console.log(faltaVisitar(40));

var profissao = "Programador";

function dados() {
  var nome = "Thulio";
  var idade = 19;
  function outrosDados() {
    var endereco = "Pernambuco";
    var idade = 19.7;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

