
const readline = require("readline");

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Description: Display name and age in the terminal
    rl.question("Digite seu nome: ", (nome) => {
        rl.question("Digite sua idade: ", (idade) => {
            console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
            rl.close();
        });
    });
}

main();