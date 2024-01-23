import React from 'react'
import nosotros from './img/nosotros.png';
export default function Nosotros() {
    return (
        <div class="componentes">
            <img className="imgPipas" src={nosotros} alt="" />
            <div >
                <div class="card cardTemas">
                    <div class="card-body">
                        <h2 >Nosotros</h2>
                        <p >Somos una empresa San Miguelense dedicada al cuidado del medio ambiente,
                            que le
                            brinda un servicio de calidad y eficiencia en la limpieza de su fosa, cisterna o cárcamo. Así
                            mismo se
                            contamos con el servicio de fletes de agua potable cumpliendo con la norma sanitaria
                            NOM-230-SSA1-2002,
                            para mayor seguridad.</p>
                    </div>
                </div>
                <div class="row ">
                    <div class="col">

                        <div class="card cardTemas">
                            <div class="card-body">
                                <h2 >Misión</h2>
                                <p >Mantener la calidad y excelente servicio en el transporte de agua
                                    potable
                                    y limpieza
                                    de fosa séptica.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardTemas">
                            <div class="card-body">
                                <h2 >Visión</h2>
                                <p >Ser la empresa líder en la zona para servicio de agua potable y para
                                    el
                                    desazolve de
                                    fosas.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardTemas">
                            <div class="card-body">
                                <div class="row">
                                    <h2 >Valores</h2>
                                    <li>Honestidad, a la hora de cotizar y realizar el servicio.</li>
                                    <li>Respeto, por el cuidado y buen uso de los recursos naturales y medio ambiente.</li>
                                    <li>Compromiso, estar en tiempo y forma con el servicio del cliente.</li>

                                </div>
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
                    <br></br>
                </div>
            </div>
        </div>
    )
}