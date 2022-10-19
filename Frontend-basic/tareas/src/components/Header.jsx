import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header className='header'>
        <h1>Tarea</h1>
        <Button texto='agregar' color='green' />
        <Button texto='borrar' color='red' />
        <Button texto='modificar' color='blue' />
    </header>
    
  )
}

export default Header


