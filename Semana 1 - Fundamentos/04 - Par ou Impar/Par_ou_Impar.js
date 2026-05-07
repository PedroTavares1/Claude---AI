// Description: Check if a number is even or odd
const readline = require('readline');

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    rl.question("Digite um numero: ", (num) => {
        const numero = parseInt(num);
        if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        } else {
           if (numero % 2 === 0) {
                console.log(`O número ${numero} é par.`);
            } else {
            console.log(`O número ${numero} é ímpar.`);
            }
        }
        rl.close();
    });
}
main();