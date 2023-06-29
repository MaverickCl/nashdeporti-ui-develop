import './perfil_usuario.css'
import React, {useEffect,useState} from 'react'
import foto from'./temuco_sports.jpg' 
import { useParams } from 'react-router-dom'
const Perfil_Equipo = () => {

    const {id}= useParams()

    const [perfil_equipo, setPerfil] = useState([])  
 
    const initialUrl=`http://localhost:8080/api/equipo/${id}`;
    
    
      const fetchPerfil=(url)=>{
        fetch(url)
          .then(response =>response.json())
          .then(data =>setPerfil(data))
          .catch(error => console.log(error))
      }
      useEffect(() => {
        fetchPerfil(initialUrl);
      }, [])
    

  return (
    <section class="seccion-perfil-usuario">
        <div class="perfil-usuario-header">
            <div class="perfil-usuario-portada">
                <div class="perfil-usuario-avatar">
                    <img src={foto} alt="" />
                    <button type="button" class="boton-avatar">
                        <i class="far fa-image"></i>
                    </button>
                </div>
                
            </div>
        </div>
        <div class="perfil-usuario-body">
            <div class="perfil-usuario-bio">
                <h3 class="titulo">{perfil_equipo.nombre}</h3>
                <h5 class="texto">{perfil_equipo.descripcion}</h5>
            </div>
            <div class="perfil-usuario-footer">
                <ul class="lista-datos">
                    <li><i class="icono"></i>Existen {perfil_equipo.vacantes} cupos disponibles</li>
                   {/* <h3 style={{textAlign: "left",margin:"0 10px"}}className="btn btn-warning">Solicitar Unirse</h3>*/}
                </ul>
                <ul class="lista-datos">
                <h3 style={{textAlign: "left",margin:"0 80px"}}className="btn btn-warning">Solicitar Unirse</h3>  
                </ul>
            </div>

        <div>
            <p></p>
        </div>

        </div>
    </section>


    
  )
}

export default Perfil_Equipo