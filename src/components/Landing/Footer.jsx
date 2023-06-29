import React from 'react'
import './landing.css'

const Footer = () => {
  return (
    <div>
        <footer id="contacto">
        <div class="contenedor">
            <h2 class="titulo">Servicio Beta, ayudanos con un feedback :D</h2>
            <form action="" class="form">
                <input class="input"  type="text" name="" id="" placeholder="Nombre" />
                <input class="input"  type="email" name="" id="" placeholder="Email" />
                <textarea  class="input" name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <input class="input"  type="submit" value="Enviar" />
            </form>
            <div className='mt-5'>
              Autores: Ricardo Millanao - Diego Garrido.<br/>
              NashCompany
              </div>
            
        </div>
    </footer>

    </div>
  )
}

export default Footer