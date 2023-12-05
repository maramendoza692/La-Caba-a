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
import Reseñas from './Reseñas';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <Router>
      <div>
        <header className="topheader">
          <nav className={`topnav ${menuOpened ? 'menu_opened' : ''}`}>
            <Link to="/" className="logo">
              <img className="imgLogo" src={imgLogo} alt="" />
            </Link>

            <button className="open-menu" aria-label="Abrir menú" onClick={toggleMenu}>
              <img className="menu" src={menu} alt="" />
            </button>

            <ul className="menu">
              <button className="close-menu" aria-label="Cerrar menú" onClick={toggleMenu}>
                <img className="cerrar" src={cerrar} alt="" />
              </button>

              <li><Link to="/" className="link-item">Inicio</Link></li>
              <li><Link to="/nosotros" className="link-item">Nosotros</Link></li>
              <li><Link to="/servicios" className="link-item">Servicios</Link></li>
              <li><Link to="/reseñas" className="link-item">Reseñas</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/reseñas" element={<Reseñas />} />
        </Routes>

        {/* <div className="footer">
          <p>Contacto: tu@email.com</p>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
