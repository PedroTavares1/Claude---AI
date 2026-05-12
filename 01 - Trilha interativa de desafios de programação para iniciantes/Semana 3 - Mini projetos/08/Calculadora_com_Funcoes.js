// Description: Calculadora com funções
const readline = require('readline');

function somar(a, b) {
    return a + b;
}  
function subtrair(a, b) {
    return a - b;
} 
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        console.log("Erro: Divisão por zero não é permitida.");
        return null;
    }
    return a / b;
}

function pedirNumeros(rl, callback) {
    rl.question("Digite o primeiro numero: ", (num1) => {
        rl.question("Digite o segundo numero: ", (num2) => {
            callback(parseFloat(num1), parseFloat(num2));
        });
    });
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log(" \nEscolha a operação: \n");
    console.log("1. Somar");
    console.log("2. Subtrair");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Sair");
    rl.question("", (opcao) => {
        if (opcao === "1") {
            pedirNumeros(rl, (num1, num2) => {
                console.log(`A soma de ${num1} e ${num2} é: ${somar(num1, num2)}`);
                rl.close();
            });
        } else if (opcao === "2") {
            pedirNumeros(rl, (num1, num2) => {
                console.log(`A subtração de ${num1} e ${num2} é: ${subtrair(num1, num2)}`);
                rl.close();
            });
        } else if (opcao === "3") {
            pedirNumeros(rl, (num1, num2) => {
                console.log(`A multiplicação de ${num1} e ${num2} é: ${multiplicar(num1, num2)}`);
                rl.close();
            });
        } else if (opcao === "4") {
            pedirNumeros(rl, (num1, num2) => {
                const resultado = dividir(num1, num2);
                if (resultado !== null) {
                    console.log(`A divisão de ${num1} e ${num2} é: ${resultado}`);
                }
                rl.close();
            });
        } else if (opcao === "5") {
            console.log("Saindo...");
            rl.close();
        } else {
            console.log("Opção inválida. Tente novamente.");
            main();
        }
    });

}

main();