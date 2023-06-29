import React from 'react'
import { Link } from 'react-router-dom';
import './contactos.css'

const Contactos = () => {
  return (
    <div className='mt-5'>
      <div className='card mt-3'>
         <div class="card-body">
             <h5 className="card-title">Luis Martinez</h5>
             <p className="card-text">Me gusta jugar futbol los martes en la ufro</p>
             {/* <div  className="btn btn-warning">Unirme</div> */}
             <Link className="btn btn-warning" to='/' >Ver Detalle</Link>
         </div>
         
    </div>
    <div className='card mt-3'>
    <div class="card-body">
             <h5 className="card-title">Giovanni Cassanelli</h5>
             <p className="card-text">Este año me encuentro aprendidendo basketball, invitenme si quieren</p>
             {/* <div  className="btn btn-warning">Unirme</div> */}
             <Link className="btn btn-warning" to='/' >Ver Detalle</Link>
         </div>
    </div>     
    </div>
  )
}

export default Contactos