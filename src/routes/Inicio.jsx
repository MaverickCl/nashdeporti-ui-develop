import React from 'react'

/* import '../components/Landing/landing.css' */

import Header from '../components/Landing/Header';
import TajetaInfo from '../components/Landing/TajetaInfo';
import Eslogan from '../components/Landing/Eslogan';
import Servicios from '../components/Landing/Servicios';
import Deportes from '../components/Landing/Deportes';
import Infoizq from '../components/Landing/Infoizq';
import Footer from '../components/Landing/Footer';

const Inicio = () => {
  return (
    <div >
     <Header />
     <Eslogan />
     <Servicios />
     <Footer />
        </div>
  )
}

export default Inicio