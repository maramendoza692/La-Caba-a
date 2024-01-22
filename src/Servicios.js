import React from 'react'
import servicios from './img/servicios.png';
import pipa from './img/flete.png';
import agua from './img/gota.png';
import bano from './img/bano.png';

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
                                    <p>¿Necesitas agua potable de calidad en cualquier lugar y momento? Ofrecemos servicios de fletes de agua potable rápidos y confiables.</p>
                                    <p>Contamos con pipas desde 3,500 L a 20,000 L</p>
                                    
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
                <div class="row ">
                <div class="col">
                        <div class="card cardTemas">
                            <div class="card-body">
                                <h4 style={{ textAlign: 'center' }} class="mision-title">Pregunta por nuestros precios, ¡Contáctanos!</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br></br>
            <br></br>
            <div class="footer">
                <div className="footer-container">
                    <br/>
                    <div >
                        <b>Carr San Miguel de Allende a Dolores Hidalgo km 1.16, Gto.</b>
                    </div>
                    <div >
                        <b>Tel. 415 152 0989  Cel. 415 122 1140  Email: fletesdeaguacerroblanco@gmail.com </b>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    )
}