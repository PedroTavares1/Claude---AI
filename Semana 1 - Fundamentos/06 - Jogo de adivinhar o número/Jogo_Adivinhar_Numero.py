# Description: A simple number guessing game
import random

def main():
    print("Bem vindo ao jogo de adivinhar o número!")
    print("Estou pensando em um número entre 1 e 100. Você tem 5 chances para adivinhar.")
    numero_secreto = random.randint(1, 100)
    tentativas = 5
    while tentativas > 0:
        palpite = int(input("Digite seu palpite: "))
        if palpite == numero_secreto:
            print("Parabéns! Você acertou!")
            return
        elif palpite < numero_secreto:
            print("O número é maior.")
        else:
            print("O número é menor.")
        tentativas -= 1
    print(f"Você perdeu! O número era {numero_secreto}.")

if __name__ == "__main__":
    main()