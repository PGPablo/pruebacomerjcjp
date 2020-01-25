import React from "react";
import '../../estilos/Ventas.css'
import {Jumbotron, Button, Image}  from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import m1 from '../../assets/ventas/m1.jpg'

const Botbar = () => (
      <Jumbotron className="ml-5 mr-5 estilo_jumbotron_ventas">
        <h1>Ventas!</h1>
        <p>
        Tenemos una variedad de produtos, de los mejores proveedores,
        seleccionados para el cuidado, uso y complemento de tu actividad agricola.
        Conoce nuestro catalogo, Si no lo encuentra lo que busca, preguntenos estamos a su
        disposicion. <b>Te invitamos a que descargues nuestro catalogo</b>
        </p>
        <p>
        <Button variant="primary">Iniciar descarga <FontAwesomeIcon icon={['fas', 'download']}/></Button>
        </p>
        <div className="posicion_jumbotron">
          <Image src={m1} className=" tamaño_imagen_jumbotron ml-5 mr-5" fluid  />
        </div>

      </Jumbotron>
    )

export default Botbar;
