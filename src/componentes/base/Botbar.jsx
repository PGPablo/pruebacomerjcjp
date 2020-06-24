import React from "react";
import '../../estilos/Botbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Botbar = () => (
        <div>
          <div className="" >
            <div className="estilo-top shadow">
              <a href="https://wa.me/4611262769" className="formato_icono">
                <FontAwesomeIcon icon={['fab', 'whatsapp']} size="3x" color="#15cc2e"/>
              </a>
              <a href="https://www.facebook.com/Comercializadora-De-Materiales-Jc-Jp-Sa-De-Cv-435283399851275/" className="formato_icono">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} size="3x" color="#1a6dc3"/>
              </a>
              <a href="https://www.instagram.com/comer_jcjp/?hl=es-la" className="formato_icono">
                <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" color="#d58c2c"/>
              </a>
            </div>
          </div>
          <div className="renglon" >
            <div className="estilo-bot">
              © Copyright ComerJC&JP. Todos los derechos reservados.
            </div>
          </div>
        </div>
    )

export default Botbar;
