import React from 'react'
import {Jumbotron, Button, CardDeck, Card}  from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../estilos/Servicios.css'

import d3 from '../../assets/cards/d3.jpg'
import d4 from '../../assets/cards/d4.jpg'
import d5 from '../../assets/cards/d5.jpg'

const Servicios = () => (

  <div className="">
    <Jumbotron className="estilo_jumbotron">
      <h1 className="estilo_texto_jumbotron center">NUESTROS SERVICIOS!</h1>
      <p className="estilo_texto_jumbotron">
        Somos una empresa entregada a nuestros clientes, siempre buscando la mejora
        continua y satisfacer todas y cada una de las necesidades de ustedes, por ello ponemos a su disposición:
      </p>
      <p className="">
        <Button variant="success center">Contáctanos</Button>
      </p>
    </Jumbotron>

    <CardDeck className="ml-4 mr-4 espacio_superior">
      <Card>
        <Card.Img variant="top" src={d3} className="estilo_imagen_card"/>
        <Card.Body className="estilo_body_card">
          <Card.Title>Mantenimiento electronico industrial</Card.Title>
          <Card.Text>
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Ingeniería e instalación eléctrica, cableado y alumbrado en general. <br /><br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Mantenimiento industrial, en su rama eléctrica, mecánica y electromecánica. <br /><br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Mantenimiento preventivo y correctivo a subestaciones eléctricas, transformadores, plantas de emergencia, C.C.M.’s, sistema de red de tierras físicas y pararrayos. <br /><br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Servicios apegados a normas nacionales e internacionales. <br /><br />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="estilo_footer_card">
          <Button variant="outline-success center">Contáctanos</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={d4} className="estilo_imagen_card"/>
        <Card.Body className="estilo_body_card">
          <Card.Title>Sector agricola</Card.Title>
          <Card.Text>
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Venta y distribución de semillas de: Maíz, sorgo, trigo, garbanzo y avena. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Agroquímicos <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Fertilizantes <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Herbicidas <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Coadyuvante <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Insecticidas de uso agrícola y urbano. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Equipo y herramientas. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Hortalizas y hortaflores. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Pasto
          </Card.Text>
        </Card.Body>
        <Card.Footer className="estilo_footer_card">
          <Button variant="outline-success center">Contáctanos</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={d5} className="estilo_imagen_card"/>
        <Card.Body className="estilo_body_card">
          <Card.Title>Arquitectura</Card.Title>
          <Card.Text>
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Dibujo de planos. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Levantamientos arquitectónicos. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Arquitectura. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Construcción <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Remodelaciones <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Ampliaciones <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Asesorías. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Diseño y proyectos. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Diseño arquitectónico. <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Proyecto ejecutivo <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Valuación <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Avalúos comerciales <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} rotation={270} color="green"/> Avalúos fiscales. <br />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="estilo_footer_card">
          <Button variant="outline-success center">Contáctanos</Button>
        </Card.Footer>
      </Card>
    </CardDeck>

  </div>
)

export default Servicios
