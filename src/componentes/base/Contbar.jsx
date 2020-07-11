import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../estilos/Contbar.css'

  const Contbar = () => (
    <div className="container color-letra estilo_letra_Julius_Sans_One">

      <div className="izquierda">
        <span className="navbar-text">
          <FontAwesomeIcon icon={['fas', 'envelope']} />
          <a href="mailto:servicios@comerjcjp.com" className="color-letra"> servicios@comerjcjp.com</a> &nbsp;| &nbsp;
        </span>
        <span className="navbar-text">
          <FontAwesomeIcon icon={['fas', 'phone']} />
          <a href="tel:4612164359" className="color-letra"> 461 216 4359</a>
        </span>
      </div>
      <div className="centro">
      </div>
      <div className="derecha">
      </div>

    </div>
  )


  export default Contbar;
