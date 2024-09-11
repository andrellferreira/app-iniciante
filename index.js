// Opção 01
/*
function start() {
  console.log("Começou");
}
*/

/*Agora vamos adicionar pacotes de outros usuários
usando o npm (Node Package Manager)
no bash
npm install inquirer
tentei instalar e deu erro. Usei o comando npm cache clean (não funcionou). Usei npm install -g npm@10.5.0 
(para atualizar a versão d o npm). Repeti o comando (npm install inquirer) e funcionou!! Glórias a DEUS!!
*/
// Opção 02 - Arrow Function, atribuindo a uma constante

const { select } = require("@inquirer/prompts");
const start = async () => {
  //let opcao = "cadastrar";//loop infinito
  //let opcao = "sair";

  while (true) {
    const opcao = await select({
      message: "Menu >",
      choices: [
        {
          name: "Cadastrar meta",
          value: "cadastrar",
        },
        {
          name: "Listar meta",
          value: "listar",
        },
        {
          name: "Sair",
          value: "sair",
        },
      ],
    }); //await - aguardar -> sempre que for usada, a funçao precisará usar async
    switch (opcao) {
      case "cadastrar":
        console.log("Vamos cadastrar");
        break;
      case "listar":
        console.log("Vamos listar");
        break;
      case "sair":
        console.log("Até a próxima!");
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
