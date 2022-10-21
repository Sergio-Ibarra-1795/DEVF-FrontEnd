import Header from "./components/Header"
import Tareas from "./components/Tareas"
import {useState} from 'react'


function App() {

const [tareas, setTareas] = useState([
  {
      id: 1,
      texto: 'Ir al cine',
      fecha: '02 de Febrero de 2022',
      terminada: true,
  },
  {
      id: 2,
      texto: 'Comprar en el supermercado',
      fecha: '10 de Febrero de 2022',
      terminada: false,
  },
  {
      id: 3,
      texto: 'Hacer app en React',
      fecha: '11 de Febrero de 2022',
      terminada: false,
  }
])

//Elminar una tarea 
const borrarTarea = (id)=>{
  //console.log('borrar', id)
  setTareas(tareas.filter((tarea)=>
    tarea.id!==id
  ))
}

return (
    <div className="container">
      <Header />
      <Tareas tareas={tareas} onDelete={borrarTarea}/>
    </div>
  )
}
export default App
