import React, {Component} from 'react'
import Title from './Title'
import AnimalCards from "./AnimalCards"
import Contact from './Contact'

import '../../forrajera/estilos/forrajera.css'

export default class Forrajera extends Component{

    render() {
        return(
            <div>
                <Title />
                <AnimalCards />
                <Contact />
            </div>
        )
    }
}