import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import App from './App';
import ListarDeportistas from './routes/deportistas/deportistaCard';
import Perfil from './routes/perfil/Perfil';
import Perfil_Equipo from './routes/perfil/Perfil_Equipo';
import Inicio from './routes/Inicio';
import ListarEquipos from './routes/equipos/equiposCard';
import Notificaciones from './routes/notificaciones/Notificaciones';
import Contactos from './routes/contactos/Contactos';
import Preferencias from './routes/preferencias/Preferencias';
import Login from './components/login/Login';
import Recomendaciones from './routes/deportistas/Recomendaciones';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='/Perfil/:id' element={<Perfil />}></Route>
      <Route path='/Recomendaciones/:id' element={<Recomendaciones />}></Route>
      <Route path='/Preferencias' element={<Preferencias />}></Route>
      <Route path='/Notificaciones/' element={<Notificaciones />}></Route>
      <Route path='/Contactos/' element={<Contactos />}></Route>
      <Route path='/Perfil_Equipo/:id' element={<Perfil_Equipo />}></Route>
      <Route path='/ListarDeportistas' element={<ListarDeportistas />} />
      <Route path='/ListarEquipos' element={<ListarEquipos />} />
      <Route path='/Perfil' element={<Perfil />} />
      <Route path='/Perfil_Equipo' element={<Perfil_Equipo />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/' element={<Inicio />} />
      {/* <Route path='http://localhost:8080/api/autentificacion/inicio-sesion' element><Route/> */}
      
    </Routes>
      
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
