# Description: Simple calculator that adds two numbers
def main():

    num1 = float(input("digite um numero: "))
    num2 = float(input("digite outro numero: "))
    soma = num1 + num2
    print(f"A soma de {num1} e {num2} é: {soma}")

if __name__ == "__main__":
    main()