// LIBS
import React from 'react'

// ASSETS
import '../../estilos/About.css'
import { Image } from 'react-bootstrap'

import ScrollAnimation from 'react-animate-on-scroll';

import d2 from '../../assets/cards/d2.jpg'

const About = () => (
  <div className="inlineblock">
    <div className="row ml-1 mr-1">
      <div className="col-7">
        <section className="sectionAbout">
          <div className=" mt-4">
            <div id="" className="m-2 py-4 py-lg-6">
              <div id="features" className="container py-4 py-lg-6">
                <div className="row text-center mt-3">
                  <div className="col-6">
                    <div className="ml-2 container-fluid fondoSeccion">
                      <ScrollAnimation animateIn="bounceInLeft">
                        <h3 className="estilo_letra_Open_Sans_Condensed color_titulo_nosotros">
                          Misión
                        </h3>
                      </ScrollAnimation>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="containter-fluid">
                      <p className="estilo_letra_Montserrat_Alternates color_letras_nosotros">
                        Comprometernos con alcanzar altos niveles de competitividad y liderazgo,
                        para lograr posicionarnos en el mercado como una empresa de calidad y
                        con alto sentido de responsabilidad, buscamos proveer de soluciones innovadoras a nuestros clientes,
                        contribuyendo a la mejora continua al prestar consultoría y servicios a empresas privadas
                        y públicas.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="features" className="container py-4 py-lg-6">
                <div className="row text-center mt-3">
                  <div className="col-6">
                    <div className="ml-2 container-fluid fondoSeccion">
                      <ScrollAnimation animateIn="bounceInLeft">
                        <h3 className="estilo_letra_Open_Sans_Condensed color_titulo_nosotros">
                          Visión
                        </h3>
                      </ScrollAnimation>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="containter-fluid">
                      <p className="estilo_letra_Montserrat_Alternates color_letras_nosotros">
                        Ser una empresa líder, alcanzando altos estándares de profesionalismo,
                        excelencia y calidad proponiendo alternativas innovadoras para
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
                      <ScrollAnimation animateIn="bounceInLeft">
                        <h3 className="estilo_letra_Open_Sans_Condensed color_titulo_nosotros">
                          Valores
                        </h3>
                      </ScrollAnimation>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="containter-fluid">
                      <p className="estilo_letra_Montserrat_Alternates color_letras_nosotros">
                        <b>Respeto:</b> Ser considerado con los demás, buscando siempre mantener y cuidar nuestra libertad y las de nuestros compañeros.<br /><br />
                        <b>Honestidad:</b> Ser coherentes con los actos y decisiones que tomamos, comprometernos en lograr metas para el bien de la empresa.<br /><br />
                        <b>Compromiso:</b> Involucrarnos para cumplir con las obligaciones que nos corresponden.<br /><br />
                        <b>Responsabilidad:</b> Actuar poniendo atención a lo que hacemos para desarrollar eficientemente nuestro trabajo.<br /><br />
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
        <ScrollAnimation animateIn="bounceInRight">
          <Image src={d2} className="tamaño_card_nosotros" />
        </ScrollAnimation>
      </div>
    </div>





  </div>


)

export default About
