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

//const { select } = require("@inquirer/prompts");] - V0
//input acrescentada para capturar dados fornecidos pelo usuário - funçao cadastrarMeta() - V1
//const { select, input } = require("@inquirer/prompts");
//checkbox inserido para usar na função listarMetas()
const { select, input, checkbox } = require("@inquirer/prompts");
const { parse } = require("path");
const fs = require("fs").promises;

let mensagem = "Bem vindo ao App de Metas";

/*
let meta = {
  value: "Tomar 3L de água diariamente",
  checked: false,
};

let metas = [meta];
//Subsitituídos pelo arquivo metas.json
*/

const carregarMetas = async () => {
  try {
    const dados = await fs.readFile("metas.json", "utf-8");
    metas = JSON.parse(dados);
  } catch (erro) {
    metas = [];
  }
};

const salvarMetas = async () => {
  await fs.writeFile("metas.json", JSON.stringify(metas, null, 2));
};

const cadastrarMeta = async () => {
  const meta = await input({ message: "Digite a meta:" });

  if (meta.length == 0) {
    mensagem = "A meta não pode ser vazia!";
    return; // Assim, retornará para o menu. Se eu quisesse que o usuário colocasse novamente uma meta: return cadastrarMeta()
    // return cadastrarMeta(); // Teste OK
  }
  metas.push({
    value: meta,
    checked: false,
  });

  mensagem = "Meta cadastrada com sucesso!";
};

const listarMetas = async () => {
  if (metas.length == 0) {
    mensagem = "Não existem metas cadastradas";
    return;
  }
  const respostas = await checkbox({
    message:
      "Uses as setas para mudar de meta, o espaço para marcar ou desmacar e o Enter para finalizar essa etapa",
    choices: [...metas],
    instructions: false,
  });

  metas.forEach((m) => {
    m.checked = false;
  });

  if (respostas.length == 0) {
    mensagem = "Nenhuma meta selecionada";
    return;
  }

  respostas.forEach((resposta) => {
    const meta = metas.find((m) => {
      return m.value == resposta;
    });

    meta.checked = true;
  });

  mensagem = "Meta(s) marcada(s) como concluídas";
};

const metasRealizadas = async () => {
  if (metas.length == 0) {
    mensagem = "Não existem metas cadastradas";
    return;
  }
  const realizadas = metas.filter((meta) => {
    return meta.checked;
  }); // () => {} Higher Other Function

  //console.log(realizadas);
  if (realizadas.length == 0) {
    mensagem = "Não existem metas realizadas!";
    return;
  }

  await select({
    message: "Metas realizadas: " + realizadas.length,
    choices: [...realizadas],
  });
};

const metasAbertas = async () => {
  if (metas.length == 0) {
    mensagem = "Não existem metas cadastradas";
    return;
  }
  const abertas = metas.filter((meta) => {
    return !metas.checked;
  });

  if (abertas.length == 0) {
    mensagem = "Nao existem metas abertas";
    return;
  }

  await select({
    message: "Metas abertas: " + abertas.length,
    choices: [...abertas],
  });
};

const deletarMetas = async () => {
  if (metas.length == 0) {
    mensagem = "Não existem metas cadastradas";
    return;
  }

  const metasDesmarcadas = metas.map((meta) => {
    return { value: meta.value, checked: false };
  });
  const itensaDeletar = await checkbox({
    message: "Selecione item para deletar",
    choices: [...metasDesmarcadas],
    instructions: false,
  });

  if (itensaDeletar.length == 0) {
    mensagem = "Não há itens para deletar";
  }

  itensaDeletar.forEach((item) => {
    metas = metas.filter((meta) => {
      return meta.value != item;
    });
  });
  mensagem = "Meta(s) deletada(s) com sucesso!";
};

const mostrarMensagem = () => {
  console.clear();

  if (mensagem != "") {
    console.log(mensagem);
    console.log("");
    mensagem = "";
  }
};

const start = async () => {
  //let opcao = "cadastrar";//loop infinito
  //let opcao = "sair";
  await carregarMetas();

  while (true) {
    mostrarMensagem();
    await salvarMetas();

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
          name: "Metas realizadas",
          value: "realizadas",
        },
        {
          name: "Metas abertas",
          value: "abertas",
        },
        {
          name: "Deletar metas",
          value: "deletar",
        },
        {
          name: "Sair",
          value: "sair",
        },
      ],
    }); //await - aguardar -> sempre que for usada, a funçao precisará usar async
    switch (opcao) {
      case "cadastrar":
        await cadastrarMeta();
        //console.log(metas);
        break;
      case "listar":
        await listarMetas();
        break;
      case "realizadas":
        await metasRealizadas();
        break;
      case "abertas":
        await metasAbertas();
        break;
      case "deletar":
        await deletarMetas();
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
