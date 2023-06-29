import './Busqueda.css'
import React from 'react'
const Busqueda = ({filtro, setfiltro}) => {
  

  const handleInputChange = ({target}) =>{
    setfiltro(target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(filtro)
  }
  return (
    <div className=" row justify-content-center ">
  <div className='buscar col-auto'>
    <form onSubmit={handleSubmit}>
      <input type="text" name='filtro' value={filtro} onChange={handleInputChange} placeholder="Buscar"  />
      <button className='boton' type='submit'>
        <i className='fas fa-search icon'></i>
      </button>
    </form>
      
    </div>
</div>

    
    
  )
}

export default Busqueda