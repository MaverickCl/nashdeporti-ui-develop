import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Recomendaciones = () => {
    const {id}= useParams()

    const [recomendacion, setRecomendacion] = useState([])  
 
    const initialUrl=`http://localhost:8080/api/relacionador/${id}`;
    
    
      const fetchPerfil=(url)=>{
        fetch(url)
          .then(response =>response.json())
          .then(data =>setRecomendacion(data))
          .catch(error => console.log(error))
      }
      useEffect(() => {
        fetchPerfil(initialUrl);
      }, [])
      
  return (
    <div>
         {recomendacion.map((item, index)=>(
      <div key={index}>
       <div className='card mt-3 mb-3'>
         <div class="card-body">
             <h5 className="card-title">{item.nombre} {item.apellidos}</h5>
             <p className="card-text">{item.descripcion}</p>
             {/* <div  className="btn btn-warning">Unirme</div> */}
             <Link className="btn btn-warning" to={`/Perfil/${item.id}`} >Ver Detalle</Link>
         </div>
     </div></div>
    ))}
    </div>
  )
}

export default Recomendaciones