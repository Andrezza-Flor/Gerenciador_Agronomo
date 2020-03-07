// querySelector -> identifica classe com o '.' na frente do nome da classe
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// querySelector -> identifica id com a '#' na frente do id
var paciente = document.querySelector("#primeiroPaciente");

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-autura")
var altura = tdAltura.textContent;

console.log(paciente); // tr dos dados do Paulo

console.log(tdPeso); // Tem que conter o peso do Paulo
console.log(peso); // Apenas o conteudo do Peso do Paulo

console.log(tdAltura); // td da altura
console.log(altura) // conteudo da altura

var imc = peso / (altura * altura)