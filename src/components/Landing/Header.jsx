import React from 'react'
import './landing.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <header class="hero">
        <div class="textos-hero">
            <h1>Bienvenido a Nash Deporti</h1>
            <p>Juntando personas a través del deporte</p>
            <Link className="n" aria-current="page" to="/Login">Empecemos</Link>
        </div>
        <div class="svg-hero" style={{height: '150px', 
                                      overflow: 'hidden',}}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style={{height: '100%' , 
                        width: '100%',}}>
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style={{stroke: 'none',fill: '#fff'}}></path>
            </svg>
            </div>
    </header>

    </div>
  )
}

export default Header