import React from 'react'
import { Link } from "react-router-dom";
import './paginas.css'
const Paginacion = () => {
  return (
    <div className='cont justify-content-center'>
       <div class='btn-group ' role="group" aria-label="Basic example">
  <Link to='/ListarDeportistas' className='btn btn-warning'>Deportistas</Link>
  <Link to='/Listarequipos'  className='btn btn-warning'>Equipos</Link>
  
</div>
    </div>
     

  )
}

export default Paginacion