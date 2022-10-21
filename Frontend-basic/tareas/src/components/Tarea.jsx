import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Tarea = ({tarea, onDelete}) => {
  return (
    <div className='tarea'>
        <h3>{tarea.texto} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(tarea.id)}/> </h3>
        <p>{tarea.fecha}</p>
    </div>
  )
}

export default Tarea