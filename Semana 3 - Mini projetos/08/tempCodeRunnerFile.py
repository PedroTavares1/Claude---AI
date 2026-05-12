# Decription: Calculadora com funções
def soma(a, b):
    return a + b

def subtrair(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b != 0:
        return a / b
    else:
        return "Erro: Divisão por zero"
    
def main():
    print ("\n Escolha a operação: \n")
    print ("1. Somar")
    print ("2. Subtrair")
    print ("3. Multiplicar")
    print ("4. Dividir")
    print ("5. Sair")
    escolha = int(input(""))
    
    num1 = float(input("Digite um numero: "))
    num2 = float(input("Digite outro numero: "))

    if escolha == 1:
        resultado = soma(num1, num2)
        print(f"A soma de {num1} e {num2} é: {resultado}")
    elif escolha == 2:
        resultado = subtrair(num1, num2)
        print(f"A subtração de {num1} e {num2} é: {resultado}")
    elif escolha == 3:
        resultado = multiplicar(num1, num2)
        print(f"A multiplicação de {num1} e {num2} é: {resultado}")
    elif escolha == 4:
        resultado = dividir(num1, num2)
        print(f"A divisão de {num1} e {num2} é: {resultado}")
    elif escolha == 5:
        print("Saindo...")
    else:
        print("Opção inválida!")


if __name__ == "__main__":
    main()
    