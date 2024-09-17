import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container />
      <BarraLateral />
      <ListaDeTarefas />
    </>
  )
}

export default App
