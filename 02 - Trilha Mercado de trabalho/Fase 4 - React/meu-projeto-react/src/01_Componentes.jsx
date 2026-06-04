function Saudacao(props) {
  return <h2>Olá, {props.nome}!</h2>
}

function App() {
  return (
    <div>
      <h1>Meu App React</h1>
      <Saudacao nome="Pedro" />
      <Saudacao nome="Maria" />
      <Saudacao nome="João" />
    </div>
  )
}

export default App