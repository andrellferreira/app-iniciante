// Opção 01
/*
function start() {
  console.log("Começou");
}
*/

// Opção 02 - Arrow Function, atribuindo a uma constante

const start = () => {
  //let opcao = "cadastrar";//loop infinito
  let opcao = "sair";

  while (true) {
    switch (opcao) {
      case "cadastrar":
        console.log("Vamos cadastrar");
        break;
      case "listar":
        console.log("Vamos listar");
        break;
      case "sair":
        return;
    }
  }
};
start();

/**
 * const start = () => {
  let count = 1;

  while (count <= 10) {
    console.log(count);
    count++;
  }
};
 * 
 */
/**
 * VERSÃO 01
 * const start = () => {
  //console.log("Começou arrow function");
  
};
start();

Versão 02
 * 
 * const start = () => {
  
  while (true) {
    console.log("Entrou no while");
    return;
  }
};
start();
 * 
 */
