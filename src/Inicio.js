import React from 'react';
import './css/main.css';
import logo from './img/La Cabaña.png';
import pipa from './img/flete.png';
import agua from './img/gota.png';
import bano from './img/bano.png';

export default function Inicio() {
  return (
    <container class="containerIncio">
      <div className="onda">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L80,165.3C160,171,320,181,480,165.3C640,149,800,107,960,85.3C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <div class="row">
          <div class="col-6">
            <img className="logo" src={logo} alt="" />
            <br></br>
            <h3 className='sloganInicio'>Calidad y servicio es nuestra prioridad.</h3>
          </div>

          
          <div class="col-6" >
            <br></br>
            <br></br>
            <div class="row">
              <div class="col-3"><img className="iconosInicio" src={agua} alt="" /></div>
              <div class="col-9"><h2 class="titulosInicio">Fletes de agua</h2></div>
            </div>
            <br></br>
            <div class="row ">
              <div class="col-3"><img className="iconosInicio" src={pipa} alt="" /></div>
              <div class="col-9"><h2 class="titulosInicio">Limpieza de fosas sépticas</h2></div>
            </div>
            <br></br>
            <div class="row ">
              <div class="col-3"><img className="iconosInicio" src={bano} alt="" /></div>
              <div class="col-9"><h2 class="titulosInicio">Renta de baños portátiles</h2></div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-9"><h5 class="titulosInicio">Salida a Dolores Hidalgo Km 1, San Miguel de Allende, Gto.</h5></div>
            </div>
            <div class="row ">
              <div class="col-9"><h5 class="titulosInicio">Tel. 415 196 8913</h5></div>
            </div>
            <div class="row ">
              <div class="col-9"><h5 class="titulosInicio">lacabanasma@gmail.com</h5></div>
            </div>

          </div>
        </div>



      </div>
      <div>

      </div>


    </container>
  );
}
