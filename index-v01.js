// array, objetos
// array []
/*
let metas = ["André", "Ferreira"];
console.log(metas[0]);
console.log(metas[0] + metas[1]);
console.log(metas[0] + ", " + metas[1]);
*/
// objeto {}
let meta = {
  value: "Ler um livro por mês",
  checked: false,
  /*isChecked: () => {}, //método
  log: (info) => {
    console.log(info);
    */
};

let metas = [
  meta,
  {
    value: "Caminhar 20 minutos por dia",
    checked: false,
  },
];
console.log(metas[1].value);

/*
console.log(meta.value);
meta.log(meta.value);
*/

/*
function e métodos - são parecidos 
function - fora do objeto
método - dentro do objeto
*/

// function

// arrow function =>
const criarMeta = () => {};

// named function
//function criarMeta() {}
/**
 * 
 
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
*/
