import React from 'react'

const Header = ({titulo,fecha}) => {
  return (
    <header className='header'>
        <h1 style={{color:"violet", backgroundColor:"black"}}>Tarea de {titulo}, {fecha}</h1>
    </header>
    
  )
}

export default Header


