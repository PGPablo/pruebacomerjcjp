import React from "react";
import '../../estilos/Ventas.css'
import {Jumbotron, Button, Image}  from 'react-bootstrap'
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
        <ScrollAnimation animateIn="bounceInRight">
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
            <Button variant="info" href={catalogo}>Iniciar descarga <FontAwesomeIcon icon={['fas', 'download']}/></Button>
            </p>
            <ScrollAnimation animateIn="bounce" duration="2">
              <div className="posicion_jumbotron">
                <Image src={v1} className=" tamaño_imagen_jumbotron ml-5 mr-5" fluid  />
              </div>
            </ScrollAnimation>
          </Jumbotron>
        </ScrollAnimation>

        <div className="renglon center titulo_marcas">
          <h1 className="estilo_letra_Open_Sans_Condensed w-100">Conoce nuestra galería de marcas disponibles</h1>
        </div>
        <br />
        <div className="container border shadow">
          <ScrollAnimation animateIn="bounceInRight" duration="2">
            <div className="renglon m-4">
              <Image src={m13} thumbnail className="m-2 estilo_img_marcas"/>
              <Image src={m2} thumbnail className="m-2 estilo_img_marcas"/>
              <Image src={m3} thumbnail className="m-2 estilo_img_marcas"/>
              <Image src={m7} thumbnail className="m-2 estilo_img_marcas"/>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInLeft" duration="2">
            <div className="renglon m-4">
              <Image src={m1} thumbnail className="m-2 estilo_img_marcas"/>
              <Image src={m6} thumbnail className="m-2 estilo_img_marcas"/>
              <Image src={m4} thumbnail className="m-2 estilo_img_marcas"/>
              <Image src={m8} thumbnail className="m-2 estilo_img_marcas"/>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInRight" duration="2">
            <div className="renglon m-4">
              <Image src={m9} thumbnail className="m-2 estilo_img_marcas"/>
              <Image src={m10} thumbnail className="m-2 estilo_img_marcas"/>
              <Image src={m11} thumbnail className="m-2 estilo_img_marcas"/>
              <Image src={m14} thumbnail className="m-2 estilo_img_marcas"/>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInLeft" duration="2">
            <div className="renglon m-4">
              
            </div>
          </ScrollAnimation>
        </div>
    </div>

    )

export default Botbar;
