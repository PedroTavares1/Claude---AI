// Description: taref list in terminal
const readline = require('readline');

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function menu(rl, tarefas) {
        console.log("\nMenu:");
        console.log("1. Adicionar tarefa");
        console.log("2. Listar tarefas");
        console.log("3. Sair");

        rl.question("Escolha uma opção: ", (escolha) => {
            if (escolha === "1") {
              // pede a tarefa e chama menu() de novo
              rl.question("Digite a tarefa: ", (tarefa) => {
                  tarefas.push(tarefa);
                    console.log("Tarefa adicionada!");
                    menu(rl, tarefas);               
                });
            } else if (escolha === "2") {
              // lista as tarefas e chama menu() de novo
                console.log("\nTarefas:");
                tarefas.forEach((tarefa, index) => {
                    console.log(`${index + 1}. ${tarefa}`);
                });
                menu(rl, tarefas);
            } else if (escolha === "3") {
                console.log("Saindo...");
                rl.close();
            } else {
                console.log("Opção inválida.");
                menu(rl, tarefas); // chama de novo
            }
        });
    }
    const tarefas = [];
    menu(rl, tarefas);
}

main();