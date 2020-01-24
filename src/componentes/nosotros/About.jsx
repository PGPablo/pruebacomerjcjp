// LIBS
import React from 'react'

// ASSETS
import '../../estilos/About.css'
import {Image} from 'react-bootstrap'

import d2 from '../../assets/cards/d2.jpg'

const About = () => (
  <div>

    <div className="row ml-1 mr-1">
      <div className="col-7">
        <section className="sectionAbout">
          <div className=" mt-4">
            <div id="features" className="m-2 py-4 py-lg-6">
              <div className="row text-center mt-3">
                <div className="col-6">
                  <div className="ml-2 container-fluid fondoSeccion">
                    <h3 className="estilo_letra_Cinzel color_titulo">Misión</h3>
                  </div>
                </div>
                <div className="col-6">
                  <div className="containter-fluid">
                    <p className="estilo_letra_Poiret color_letras">
                    Comprometernos con alcanzar los más altos niveles de competitividad y liderazgo,
                    para lograr posicionarnos en el mercado como una empresa de calidad, innovadora y
                    con alto sentido de responsabilidad, buscamos proveer de soluciones a nuestros clientes,
                    contribuyendo a la mejora continua de prestar consultoría y servicios a empresas privadas
                    y públicas.
                    </p>
                  </div>
                </div>
              </div>
              <div id="features" className="container py-4 py-lg-6">
                <div className="row text-center mt-3">
                  <div className="col-6">
                    <div className="ml-2 container-fluid fondoSeccion">
                      <h3 className="estilo_letra_Cinzel color_titulo">Visión</h3>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="containter-fluid">
                      <p className="estilo_letra_Poiret color_letras">
                        Ser una empresa líder, alcanzando los más altos estándares de calidad,
                        excelencia, profesionalismo proporcionando soluciones innovadoras para
                        impulsar el desarrollo en sector público y privado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="features" className="container py-4 py-lg-6">
                <div className="row text-center mt-3">
                  <div className="col-6">
                    <div className="ml-2 container-fluid fondoSeccion">
                      <h3 className="estilo_letra_Cinzel color_titulo">Valores</h3>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="containter-fluid">
                      <p className="estilo_letra_Poiret color_letras">
                        <b>Respeto:</b> Ser considerado con los demás, buscando siempre mantener y cuidar nuestra libertad y las de nuestros compañeros.<br />
                        <b>Honestidad:</b> Ser coherentes con los actos y decisiones que tomamos, comprometernos en lograr metas para el bien de la empresa.<br />
                        <b>Compromiso:</b> Involucrarnos completamente para cumplir con las obligaciones que nos corresponden.<br />
                        <b>Responsabilidad:</b> Actuar conscientemente poniendo atención a lo que hacemos para desarrollar eficientemente nuestro trabajo.<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-5">
        <Image src={d2} className="tamaño_card_nosotros" />
      </div>
    </div>





  </div>


)

export default About