import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(contador + 1)
  }
  
  useEffect(() => {
    console.log('Contador mudou para:', contador)
  }, [contador])

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={() => setContador(0)}>Zerar</button>
    </div>
  )
}

export default App