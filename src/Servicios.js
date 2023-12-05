import React from 'react'
import servicios from './img/servicios.png';
import pipa from './img/flete.png';
import agua from './img/gota.png';
import bano from './img/bano.png';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; 

export default function Servicios() {
    return (
        <div class="componentes">
            <img className="imgPipas" src={servicios} alt="" />
            <div class="nsotros2">
                <div class="row ">
                    <div class="col">

                        <div class="card cardTemas">
                            <div class="card-body">
                                <div class="row ">
                                    <div class="col-3"><img className="iconosServicios" src={agua} alt="" /></div>
                                    <div class="col-9"><h2 class=" mision-title">Fletes de agua</h2></div>
                                </div>
                                <div class="row ">
                                    <p></p>
                                </div>
                                <div class="row ">
                                    <p>¿Necesitas agua potable de calidad en cualquier lugar y momento? Ofrecemos servicios de fletes de agua potable rápidos y confiables. </p>
                                    <li>Pipa de 10,000 l.</li>
                                    <li>Pipa de 5,000 l.</li>
                                    <li>Pipa de 1,000 l.</li>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardTemas">
                            <div class="card-body">
                            <div class="row ">
                                    <div class="col-3"><img className="iconosServicios" src={pipa} alt="" /></div>
                                    <div class="col-9"><h2 class=" mision-title">Limpieza de fosas sépticas</h2></div>
                                </div>
                                <div class="row ">
                                    <p></p>
                                </div>
                                <p>Garantizamos un servicio eficiente y profesional para la limpieza de fosas sépticas! Mantén tu sistema séptico en óptimas condiciones con nuestro equipo especializado. Deshazte de residuos de manera segura y confiable</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardTemas">
                            <div class="card-body">
                            <div class="row ">
                                    <div class="col-3"><img className="iconosServicios" src={bano} alt="" /></div>
                                    <div class="col-9"><h2 class=" mision-title">Renta de baños portátiles</h2></div>
                                </div>
                                <div class="row ">
                                    <p></p>
                                </div>
                                <div class="row ">
                                    <p>Ya sea para eventos especiales, construcciones o situaciones temporales, ofrecemos servicios de renta de baños portátiles de alta calidad. Modernos, limpios y listos para satisfacer tus necesidades.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="row "><p></p></div>
            <div class="row "><p></p></div>
            <div class="footer">
                <div className="footer-container">
                    <div className="footer-item">
                        <FaMapMarkerAlt className="footer-icon" />
                        <b>Salida a Dolores Hidalgo Km 1, San Miguel de Allende, Gto.</b>
                    </div>
                    <div className="footer-item">
                        <b>Tel. 415 196 8913  Email: lacabanasma@gmail.com</b>
                    </div>
                    <div className="footer-item">
                        <FaEnvelope className="footer-icon" />
                        <p></p>
                    </div>
                    <div className="footer-item">
                        <FaPhone className="footer-icon" />
                        <p>Teléfono: Tu Número de Teléfono</p>
                    </div>
                    <div className="footer-item">
                        <FaPhone className="footer-icon" />
                        <p>Teléfono: Tu Número de Teléfono</p>
                    </div>
                </div>
            </div>
        </div>
    )
}