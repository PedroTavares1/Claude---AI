# Description: taref list in terminal
def main():

    tarefas = []
    while True:
        print("\nMenu:")
        print("1. Adicionar tarefa")
        print("2. Listar tarefas")
        print("3. Sair")
        escolha = input("Escolha uma opção: ")

        if escolha == "1":
            tarefa = input("Digite a tarefa: ")
            tarefas.append(tarefa)
            print("Tarefa adicionada!")

        elif escolha == "2":
            if not tarefas:
                print("Nenhuma tarefa encontrada.")
            else:
                print("Tarefas:")
                for idx, tarefa in enumerate(tarefas, start=1):
                    print(f"{idx}. {tarefa}")

        elif escolha == "3":
            print("Saindo...")
            break   
        else:
            print("Opção inválida. Tente novamente.")  


if __name__ == "__main__":
    main()