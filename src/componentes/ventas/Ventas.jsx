import React from "react";
import '../../estilos/Ventas.css'
import { Jumbotron, Button, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollAnimation from 'react-animate-on-scroll';

import v1 from '../../assets/ventas/m1.jpg'

import m1 from '../../assets/marcas/m1.png'
import m2 from '../../assets/marcas/m2.png'
import m3 from '../../assets/marcas/m3.png'
import m4 from '../../assets/marcas/m4.png'
import m6 from '../../assets/marcas/m6.png'
import m7 from '../../assets/marcas/m7.png'
import m8 from '../../assets/marcas/m8.png'
import m9 from '../../assets/marcas/m9.jpg'
import m10 from '../../assets/marcas/m10.jpg'
import m11 from '../../assets/marcas/m11.png'
import m13 from '../../assets/marcas/m13.png'
import m14 from '../../assets/marcas/m14.png'

import catalogo from './catalogo.pdf'


const Botbar = () => (
  <div className="inlineblock">

    <Jumbotron className="ml-5 mr-5 estilo_jumbotron_ventas">
      <h1 className="titulo_jumbotron_ventas estilo_letra_Open_Sans_Condensed">
        Descarga nuestro catalogo de productos.
            </h1>
      <p className="texto_jumbotron_ventas estilo_letra_Athiti">
        Tenemos una variedad de produtos, de los mejores proveedores,
        seleccionados para el cuidado, uso y complemento de tu actividad agricola.
        Conoce nuestro catalogo, Si no lo encuentra lo que busca, preguntenos estamos a su
            disposicion. <b>Te invitamos a que descargues nuestro catalogo.</b>
      </p>
      <p>
        <Button variant="info" href={catalogo}>Iniciar descarga <FontAwesomeIcon icon={['fas', 'download']} /></Button>
      </p>

      <div className="posicion_jumbotron">
        <Image src={v1} className=" tamaño_imagen_jumbotron ml-5 mr-5" fluid />
      </div>
    </Jumbotron>





    <div className="renglon center titulo_marcas">
      <h1 className="estilo_letra_Open_Sans_Condensed w-100">Conoce nuestra galería de marcas disponibles</h1>
    </div>
    <br />

    <div className="container border">
      <div className="row">

        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img className="estilo_img_marcas" src={m13} alt="..." />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img className="estilo_img_marcas" src={m2} alt="..." />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img className="estilo_img_marcas" src={m3} alt="..." />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img className="estilo_img_marcas" src={m7} alt="..." />
        </div>


        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img className="estilo_img_marcas" src={m1} alt="..." />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img className="estilo_img_marcas" src={m6} alt="..." />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img className="estilo_img_marcas" src={m4} alt="..." />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img className="estilo_img_marcas" src={m8} alt="..." />
        </div>


        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img className="estilo_img_marcas" src={m9} alt="..." />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img className="estilo_img_marcas" src={m10} alt="..." />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img className="estilo_img_marcas" src={m11} alt="..." />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img className="estilo_img_marcas" src={m14} alt="..." />
        </div>

      </div>
    </div>

  </div>

)

export default Botbar;
