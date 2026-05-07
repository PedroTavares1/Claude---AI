// Description: Simple calculator that adds two numbers
const readline = require('readline');

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question("Digite o primeiro numero: ", (num1) => {
        rl.question("Digite o segundo numero: ", (num2) => {
            const soma = parseFloat(num1) + parseFloat(num2);
            console.log(`A soma de ${num1} e ${num2} é: ${soma}`);
            rl.close();
        });
    });
}

main();
