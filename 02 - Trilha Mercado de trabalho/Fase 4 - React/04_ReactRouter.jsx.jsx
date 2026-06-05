import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Inicio() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao meu app!</p>
    </div>
  )
}

function Sobre() {
  return (
    <div>
      <h1>Sobre</h1>
      <p>Esta é a página sobre.</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App