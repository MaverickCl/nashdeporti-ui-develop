import React from 'react'
import './notificaciones.css'
import { Link } from 'react-router-dom';

const Notificaciones = () => {
  return (
    <div className='mt-3'>
        <h3 className='titulo'>Notificaciones</h3>
        <div className='contenedor-notificaciones mt-5'>
            <div class="alert alert-secondary mt-3" role="alert">
               Luis te a invitado a practicar Futbol
               <br />
               <Link className='btn btn-warning mt-3' to="/Contactos">aceptar</Link>
               <button className='btn btn-warning mt-3'>rechazar</button>
            </div>
            <div class="alert alert-secondary mt-3" role="alert">
               Giovanni te a invitado a practicar Futbol
               <br />
               <button className='btn btn-warning mt-3'>aceptar</button>
               <button className='btn btn-warning mt-3'>rechazar</button>
            </div>
        </div>
 

    </div>
  )
}

export default Notificaciones