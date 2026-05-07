// Description: A simple number guessing game
const readline = require('readline');

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
 

    console.log("Bem vindo ao jogo de adivinhar o número!")
    console.log("Estou pensando em um número entre 1 e 100. Você tem 5 chances para adivinhar.")

    function adivinhar(rl, numeroSecreto, tentativas) {
    if (tentativas === 0) {
        console.log(`Você perdeu! O número secreto era: ${numeroSecreto}.`);
        rl.close();
        return;
        }

    
        rl.question("Digite seu palpite: ", (palpite) => {
            const palpiteNum = parseInt(palpite);
            if (palpiteNum === numeroSecreto) {
                console.log("Parabéns! Você adivinhou o número!");
              rl.close();
            } else if (palpiteNum < numeroSecreto) {
             console.log("Muito baixo! Tente novamente.");
             adivinhar(rl, numeroSecreto, tentativas - 1);
            } else {
                 console.log("Muito alto! Tente novamente.");
                adivinhar(rl, numeroSecreto, tentativas - 1);
            }   
        });
    
    }
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
        adivinhar(rl, numeroSecreto, 5);

}

main();