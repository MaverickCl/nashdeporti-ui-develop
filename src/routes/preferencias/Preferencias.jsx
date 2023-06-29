import React from 'react'
import './preferencias.css'
import { Link } from 'react-router-dom';

const Preferencias = () => {
  return (
   <div className='Botones'>
    <h3 className='mt-3 mb-3'> Deportes</h3>
     <div class="btn-group mt-3" role="group" aria-label="Basic checkbox toggle button group">
      <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
      <label class="btn btn-outline-warning" for="btncheck1">Futbol</label>

      <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
      <label class="btn btn-outline-warning" for="btncheck2">Basket</label>

      <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
      <label class="btn btn-outline-warning" for="btncheck3">Tennis</label>
      <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off" />
      <label class="btn btn-outline-warning" for="btncheck4">Rugby</label>

      <input type="checkbox" class="btn-check" id="btncheck5" autocomplete="off" />
      <label class="btn btn-outline-warning" for="btncheck5">Running</label>

      <input type="checkbox" class="btn-check" id="btncheck6" autocomplete="off" />
      <label class="btn btn-outline-warning" for="btncheck6">Ping pong</label>
      
    </div>
    <h3 className='mt-5 mb-3' > Edades</h3>
    <div class="btn-group mt-3" role="group" aria-label="Basic checkbox toggle button group">
      <input type="checkbox" class="btn-check" id="btncheck7" autocomplete="off" />
      <label class="btn btn-outline-warning" for="btncheck7">18 - 25</label>

      <input type="checkbox" class="btn-check" id="btncheck7" autocomplete="off" />
      <label class="btn btn-outline-warning" for="btncheck8">25 - 35</label>

      <input type="checkbox" class="btn-check" id="btncheck7" autocomplete="off" />
      <label class="btn btn-outline-warning" for="btncheck9">45 - 60</label>
    </div>
    <h3 className='mt-5 mb-3' > Generos</h3>
    <div class="btn-group mt-3" role="group" aria-label="Basic checkbox toggle button group">
      <input type="checkbox" class="btn-check" id="btncheck10" autocomplete="off" />
      <label class="btn btn-outline-warning" for="btncheck10">Masculino</label>

      <input type="checkbox" class="btn-check" id="btncheck11" autocomplete="off" />
      <label class="btn btn-outline-warning" for="btncheck11">Sin Preferencia</label>

      <input type="checkbox" class="btn-check" id="btncheck12" autocomplete="off" />
      <label class="btn btn-outline-warning" for="btncheck12">Femenino</label>
    </div><br />
    <Link className="btn btn-warning mt-5" to='/ListarDeportistas' >Siguiente</Link>
  </div>

  )
}

export default Preferencias