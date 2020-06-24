import React from 'react'

//Componentes
import ModuloNoticias from './moduloNoticias'
import {Row} from 'react-bootstrap'

//Contexto
import {AuthContext} from '../../context/auth'

//Estilo
import styles from './style.module.scss'

class Dashboard extends React.Component {
    
    render() {
        return(
            <div className="container mx-auto border shadow">
                <h3 className={styles.titulo_dashboard}>Seleccionar actividad a modificar</h3>

                <div className="container mx-auto border shadow mb-3">
                    <Row className="container mx-auto ">
                        <ModuloNoticias />
                    </Row>
                </div>

            </div>

        )
    }
}

Dashboard.contextType = AuthContext

export default Dashboard