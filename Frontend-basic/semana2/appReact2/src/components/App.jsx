import { useEffect, useState } from 'react'
import '../styles/App.css'

function App () {
  console.log('render')
/* Reglas básicas de los hooks */
/* 1. Debe ser llamado en la cabecera del componente */
/* 2. No se pueden llamar dentro de condicionales, ciclos o scopes */

  /*const [username, setUserName] = useState('Bruno') */
  const [number, setNumber] = useState(0)
  /* const handleChangeName = () => setUserName('Jared') */

  /* useEffect SIEMPRE SE EJECUTA */
  /*useEffect(() => {
    handleChangeName()
    console.log('update')
  }) */

  /* versión de useEffect que se ejecuta una sola vez */
/*
  useEffect(()=>{
    number == 0 && console.log('useEffect')
  },[]) */

  const productCount = 10

  /* Version que se ejeucta cuando detecta el cambio en un estado específico  */
  useEffect(() => {
    number === productCount && window.alert('YA NO HAY PRODUCTOS')
  }, [number])

  return (
    <div className='App'>
      <h2>{number}</h2>
      <button onClick={() => number < productCount && setNumber(number + 1)}>Cambiar</button>
    </div>
  )
}

export default App
