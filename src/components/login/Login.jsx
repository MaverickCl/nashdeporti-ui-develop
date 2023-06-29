import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';

const login = () => {

    
  return (
    
    <div>
        <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image" />
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Registrarse con: </p>
           

            <button type="button" class="btn btn-warning btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">O</p>
          </div>


          <div class="form-outline mb-3">
            <input type="mail" id="form3Example4" class="form-control form-control-lg"
              placeholder="Ingresar email" />
            <label class="form-label" for="form3Example4">Email</label>
          </div>


          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Ingresar contraseña" />
            <label class="form-label" for="form3Example4">Contraseña</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">

            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Recuerdame
              </label>
            </div>
            <a href="#!" class="text-body">olvide mi contraseña</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <Link to='/Preferencias' class="btn btn-warning btn-lg"
              style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Ingresar</Link>
            <p class="small fw-bold mt-2 pt-1 mb-0">No tienes cuenta? <a href="#!"
                class="link-danger">Registrarse</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
        

    </div>
  )
}

export default login