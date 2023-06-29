import React, {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import Paginacion from '../../components/paginas/Paginacion';
import './listar_equipos.css'
import Busqueda from '../../components/Busqueda/Busqueda';

const ListarEquipos = () => {

  const [filtro, setfiltro] = useState('')
  const [equipos, setEquipos] = useState([])  
 
const initialUrl="http://localhost:8080/api/equipo/todos";


  const fetchEquipos=(url)=>{
    fetch(url)
      .then(response =>response.json())
      .then(data =>setEquipos(data))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    fetchEquipos(initialUrl);
  }, [])
 
  const equiposFiltrados = equipos.filter(equipo =>  equipo.nombre.toLowerCase().includes(filtro.toLowerCase()))
  return (
    <div className='mt-3'>
      <div className=''> 
        <Busqueda filtro={filtro} setfiltro={setfiltro}/>
        <Paginacion />
      </div>
    {equiposFiltrados.map((item, index)=>(
      <div key={index}>
       <div className='card mt-3 mb-3'>
     
         <div style={{textAlign: "left",padding:"20px"}} class="card-body-shadow" to={`/Perfil/${item.id}`}>
             <h4 className="card-title">{item.nombre} </h4>
             <h6 className="card-text">{item.descripcion}</h6>
             <h6 className="card-text">vacantes disponibles: {item.vacantes}</h6>
              <div style={{textAlign: "left",padding:"10px",margin:"5px 0"}} className="btn btn-warning">Solicitar unirme</div>
             <Link style={{padding:"10px",margin:"0 5px"}}className="btn btn-warning" to={`/Perfil_Equipo/${item.id}`} >Ver Detalle</Link>
         </div>
         
     </div></div>
    ))}
     
    </div>

)
}

export default ListarEquipos