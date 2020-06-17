import React, {Component} from 'react'
import '../../forrajera/estilos/forrajera.css'

export default class Contact extends Component {
    render(){
        return(
            <div className="estilo_contact">
                <div className="estilo_titulo_forrajera">
                    <h3>Encuentranos en:</h3>
                </div>
                <div className="row">
                    <div className="col-7 estilo_mapa">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.797819629929!2d-100.75930718556914!3d20.718433086167288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842ca8528dc4dd0f%3A0x81b8a3e00fad33ad!2sMagisterio%2034%2C%20Zona%20Centro%2C%2038200%20Comonfort%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1590099989762!5m2!1ses-419!2smx" 
                                width="400" height="400" frameborder="0" allowfullscreen="" aria-hidden="false" 
                                tabindex="0"></iframe>
                    </div>
                    <div className="col-5">
                        <h4 > Dirección: </h4>
                        <h6> <strong>Magisterio 34</strong>, Zona Centro, 38200 Comonfort, Gto.</h6>
                        <h4 > Correo electronico: </h4>
                        <h6> <strong>servicios@comerjcjp.com</strong> </h6>
                    </div>
                </div>
           </div>
        )
    }
}