import Header from "./components/Header"
import Tareas from "./components/Tareas"

function App() {
const usuario = "Chikito"

return (
    <div className="container">
      <Header titulo="Chikito B" fecha="10/18/22"/>
      <Tareas />
    </div>
  )
}
export default App
