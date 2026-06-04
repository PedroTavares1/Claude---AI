import { useState } from 'react'
import './App.css'




function App() {
  const [contador, setContador] = useState(0)
  
    function incrementar() {
    setContador(contador + 1)
  }

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={() => setContador(0)}>Zerar</button>
    </div>
  )

    
    
}
  // variável normal - muda mas a tela não atualiza
  // let contador = 0
  // contador = contador + 1  // React não sabe

  // useState - muda e a tela atualiza automaticamente
  // const [contador, setContador] = useState(0)
  // setContador(contador + 1)  // React sabe e atualiza!

export default App