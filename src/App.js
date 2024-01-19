import React, { useState } from 'react';
import './App.css';
import './css/main.css';
import './css/navbar.css';
import imgLogo from './img/La Cabaña logo completo.png';
import logo from './img/home.png';
import cerrar from './img/close_FILL0_wght400_GRAD0_opsz48.png'
import menu from './img/menu_FILL0_wght400_GRAD0_opsz48.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Cambiado de BrowserRouter a Routes
import Inicio from './Inicio';
import Nosotros from './Nosotros';
import Servicios from './Servicios';


function App() {
  return (
    <Router>
      <div>
        <header className="topheader">
          <nav className="topnav">
            <Link to="/" className="logo">
              <img className="imgLogo" src={imgLogo} alt="" />
            </Link>

            <ul className="menu">

              <li><Link to="/" className="link-item">Inicio</Link></li>
              <li><Link to="/nosotros" className="link-item">Nosotros</Link></li>
              <li><Link to="/servicios" className="link-item">Servicios</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>

      </div>
      
    </Router>
  );
}

export default App;
