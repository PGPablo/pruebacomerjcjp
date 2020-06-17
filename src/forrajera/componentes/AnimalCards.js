import React, {Component} from 'react'
import '../../forrajera/estilos/forrajera.css'

import ANIMALES_CATALOGO from './Catalogo.json'
const ANIMALS = Object.keys(ANIMALES_CATALOGO)


export default class AnimalCards extends Component {


    _CrearCards = (ANIMAL) => {
        return(
            <div key={ANIMAL} className="contenedor_card_forrajera">
                <img src={ANIMALES_CATALOGO[ANIMAL]["src"]} className="imagen_card_forrajera" />
                <div className="centrado_card_forrajera">
                    Producto para {ANIMALES_CATALOGO[ANIMAL]["nombre"]}
                </div>
            </div>
        )
    }

    render(){
        return(
            <div>
                {ANIMALS.map(this._CrearCards)}
            </div>
        )
    }
}