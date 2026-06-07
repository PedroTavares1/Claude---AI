import { useState } from 'react'
import './App.css'

// funções → cuidam dos dados
// return → cuida do visual

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]) //Lista de tarefas
  const [novaTarefa, setNovaTarefa] = useState('') //Texto da nova tarefa
  // useState([]) → lista começa vazia
  // useState('') → texto começa vazio
  
  function adicionarTarefa() {
    if (novaTarefa.trim() !== '') { // Verifica se o texto não está vazio
      setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]) // Adiciona nova tarefa à lista
      setNovaTarefa('') // Limpa o campo de entrada após adicionar a tarefa
    }
  }
  function deletarTarefa(index) { 
    setTarefas(tarefas.filter((_, i) => i !== index)) // Remove a tarefa com o índice correspondente
  } // espaço vazio para ignorar o parâmetro do filtro, já que não é necessário

  function concluirTarefa(index) {
    setTarefas(tarefas.map((tarefa, i) => // Percorre a lista de tarefas. Diferente do filter que remove itens, o map transforma itens — percorre a lista e retorna uma lista nova modificada!
        i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa // Se o índice da tarefa for igual ao índice clicado, retorna uma nova tarefa com a propriedade 'concluida' invertida. Caso contrário, retorna a tarefa original sem alterações.
    )) //
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input //Caixa de texto para nova tarefa
        type="text" //
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      
      <ul>
        {tarefas.map((tarefa, index) => (
          <li 
              key={index}
              onClick={() => concluirTarefa(index)}
            >
              <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
                  {tarefa.texto}
              </span>
              <button onClick={(e) => {
                  e.stopPropagation()
                  deletarTarefa(index)
              }}>Deletar</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

function App() { 
  return (<div>
    {<ListaDeTarefas />}
  </div>
)
  
}

export default App