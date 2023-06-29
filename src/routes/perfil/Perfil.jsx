import './perfil_usuario.css'
import React, {useEffect,useState} from 'react'
import foto from'./img.jpg' 
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Perfil = () => {

    const {id}= useParams()

    const [perfil, setPerfil] = useState([])  
 
    const initialUrl=`http://localhost:8080/api/deportista/${id}`;
    
    
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
                    
                </div>
                
            </div>
        </div>
        <div class="perfil-usuario-body">
            <div class="perfil-usuario-bio">
                <h3 class="titulo">{perfil.nombre} {perfil.apellidos}</h3>
                <p class="texto">{perfil.descripcion}</p>
            </div>
            <div class="perfil-usuario-footer">
                <ul class="lista-datos">
                    <li><i class="icono fas fa-phone-alt"></i> {perfil.correo}</li>
                    <li><i class="icono fa-solid fa-calendar"></i> {perfil.edad} </li>
                    <li><i class="icono fa-solid fa-city"></i>{perfil.comuna} </li>
                </ul>
               {/*  <Link className="btn btn-warning" to={`/Recomendaciones/${item.id}`} >Ver Detalle</Link> */}
                <div class="redes-sociales">
                <Link to="/Contactos/" class="boton-redes facebook "><i class="fa-solid fa-user"></i></Link>
                <Link to="/Notificaciones/" class="boton-redes twitter "><i class="fa-regular fa-bell"></i></Link>
                <a href={`https://${perfil.redSocialPrincipal}`} class="boton-redes instagram fab fa-instagram"><i class="icon-instagram"></i></a>
                </div>
            </div>
            
        </div>
        <Link className="btn btn-warning mt-5" to={`/Recomendaciones/${perfil.id}`} >Ver Recomendaciones</Link>
    </section>


    
  )
}

export default Perfil