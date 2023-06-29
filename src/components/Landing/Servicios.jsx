import React from 'react'
import './landing.css'

const Servicios = () => {
  return (
    <div>
        <section class="cards contenedor">
        <h2 class="titulo">¿Que hay de nuevo?</h2>
        <div class="content-cards">
            <article class="card">
                <i class="far fa-clone"></i>
                <h3>Reunete</h3>
                <p>Reunete con deportistas como tu</p>
                <div  class="cta">Learn more</div>
            </article>
            <article class="card">
                <i class="fas fa-database"></i>
                <h3>Equipo</h3>
                <p>Junta tu equipo o encuentra uno para competir</p>
                <div href="" class="cta">Learn more</div>
            </article>
            <article class="card">
                <i class="far fa-object-group"></i>
                <h3>Descubre tu nueva pasion</h3>
                <p> Nash deporti ofrece diferentes alternativas de deporte</p>
                
            </article>
        </div>
 
    </section>
    </div>
  )
}

export default Servicios