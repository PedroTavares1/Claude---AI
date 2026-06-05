import { useState } from 'react'
import './App.css'

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
    setTarefas(tarefas.filter((_, i) => i !== index))
  }
  function concluirTarefa(index) {
    setTarefas(tarefas.map((tarefa, i) => 
        i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ))
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input 
        type="text"
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