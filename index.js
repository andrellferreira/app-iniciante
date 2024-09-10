// hello world
console.log("Hello World");

// let - variável const - constante
let mensagem = "Olá, mundo";

const texto = "Escopo Global";
// As chaves determinam o escopo local
{
  const texto = "Escopo Local";
  console.log(texto);
}

console.log(texto);
