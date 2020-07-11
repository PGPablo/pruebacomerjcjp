import React from 'react'
import { Jumbotron, Button, Card, Accordion, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../estilos/Servicios.css'

import d4 from '../../assets/cards/d4.jpg'

import p1 from '../../assets/proyectos/p1.jpg'



const ServAgricola = () => (

  <div className="">
    <Jumbotron className="estilo_jumbotron_agricola">
      <ScrollAnimation animateIn="bounceInRight">
        <h1 className="estilo_texto_jumbotron center">SECTOR AGRARIO</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInLeft">
        <p className="estilo_texto_jumbotron">
          Somos una empresa entregada a nuestros clientes, siempre buscando la mejora
          continua y satisfacer todas y cada una de las necesidades de ustedes, por ello ponemos a su disposición:
          </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInRight">
        <p className="">
          <Button variant="success center">Contactanos</Button>
        </p>
      </ScrollAnimation>
    </Jumbotron>

    <Card className="posicion_card">
      <Card.Img variant="top" src={d4} className="estilo_imagen_card" />
      <Card.Body className="estilo_body_card">
        <Card.Title>Sector agricola</Card.Title>
        <Card.Text>
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green" /> Venta y distribución de semillas de: Maíz, sorgo, trigo, garbanzo y avena. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green" /> Agroquímicos <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green" /> Fertilizantes <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green" /> Herbicidas <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green" /> Coadyuvante <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green" /> Insecticidas de uso agrícola y urbano. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green" /> Equipo y herramientas. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green" /> Hortalizas y hortaflores. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green" /> Pasto
        </Card.Text>
      </Card.Body>
      <Card.Footer className="estilo_footer_card">
        <Button variant="outline-success center" href="/contact">Contactanos</Button>
      </Card.Footer>
    </Card>

    <div className="container border shadow mt-5" hidden>
      <h2 className="mt-2 mb-2 estilo_letra_Open_Sans_Condensed">Nuestra experiencia nos respalda.</h2>
      <Accordion defaultActiveKey="0" className="mt-4 mb-4 estilo_acordion">
        <Card className="estilo_acordion">
          <Card.Header className="encabezado_acordion">
            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="color_letra_acordion estilo_letra_Open_Sans_Condensed">
              Proyecto de muestra 1
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0" className="cuerpo_acordion">
            <ScrollAnimation animateIn="rotateInDownLeft">
              <Card.Body className="color_letra_acordion">
                <div className="renglon ">
                  <div className="col_imagen_acordion">
                    <Image src={p1} className=" tamaño_imagen_acordion" />
                  </div>
                  <div className="col_texto_acordion">
                    <h2 className="mt-2 estilo_letra_Open_Sans_Condensed">Titulo del proyecto</h2> <br />
                    <p className="estilo_letra_Open_Sans_Condensed">Descripción del proyecto</p>
                  </div>
                </div>
              </Card.Body>
            </ScrollAnimation>
          </Accordion.Collapse>
        </Card>
        <Card className="estilo_acordion">
          <Card.Header className="encabezado_acordion">
            <Accordion.Toggle as={Button} variant="link" eventKey="1" className="color_letra_acordion estilo_letra_Open_Sans_Condensed">
              Proyecto de muestra 2
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1" className="cuerpo_acordion">
            <ScrollAnimation animateIn="rotateInDownLeft">
              <Card.Body className="color_letra_acordion">
                <div className="renglon ">
                  <div className="col_imagen_acordion">
                    <Image src={p1} className=" tamaño_imagen_acordion" />
                  </div>
                  <div className="col_texto_acordion">
                    <h2 className="mt-2 estilo_letra_Open_Sans_Condensed">Titulo del proyecto</h2> <br />
                    <p className="estilo_letra_Open_Sans_Condensed">Descripción del proyecto</p>
                  </div>
                </div>
              </Card.Body>
            </ScrollAnimation>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>

  </div>
)

export default ServAgricola
