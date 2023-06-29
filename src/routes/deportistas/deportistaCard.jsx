import React, {useEffect,useState} from 'react'
import { Link } from "react-router-dom";

import './listar_deportistas.css'
import Busqueda from '../../components/Busqueda/Busqueda';
import Paginacion from '../../components/paginas/Paginacion';

const ListarDeportistas = () => {
  const [filtro, setfiltro] = useState('')
  const [deportistas, setDeportistas] = useState([])  
 
const initialUrl="http://localhost:8080/api/deportista/todos";


  const fetchDeportistas=(url)=>{
    fetch(url)
      .then(response =>response.json())
      .then(data =>setDeportistas(data))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    fetchDeportistas(initialUrl);
  }, [])
 
  const desportistasFiltrados = deportistas.filter(deportista =>  deportista.nombre.toLowerCase().includes(filtro.toLowerCase()))
  return (
    <div className='mt-3'>
      
      <div className=''> 
        <Busqueda filtro={filtro} setfiltro={setfiltro} />
        <Paginacion />
      </div>
    <br />
    {desportistasFiltrados.map((item, index)=>(
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

export default ListarDeportistas