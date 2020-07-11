import React from 'react'
import { withRouter } from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {cerrarSesionAccion} from '../../redux/userDucks'

//Componentes
import ModuloNoticias from './ModuloNoticias'
import ModuloSlders from './ModuloSliders'
import {Row} from 'react-bootstrap'

//Estilo
import styles from './style.module.scss'


const Dashboard = (props) => {
    const dispatch = useDispatch()
    const [mod, setMod] = React.useState('noticias')

    const usuario = useSelector(store => store.usuario)

    const cerrarSesion = () => {
        dispatch(cerrarSesionAccion())
        props.history.push('/login')
    }


    return(
        <div className="container mx-auto border shadow">
                <p className={styles.titulo_dashboard}>
                    Bienvenido {usuario.info && usuario.info.email} 
                <button className="btn btn-outline-danger btn-sm ml-2 mt-4 mb-4"
                        onClick={() => cerrarSesion()}
                    >
                        Cerrar sesión
                    </button> 
                </p>
                <h3 className={styles.subtitulo_dashboard}>
                    Panel de control
                </h3>

                <Row className="container border mx-auto mb-4">
                   
                    <button className="btn btn-info ml-2 mt-4 mb-4"
                        onClick={() => mod !== "noticias" ? setMod("noticias") : setMod("") }
                    >
                        Modulo noticias
                    </button>
                    <button className="btn btn-info ml-2 mt-4 mb-4"
                        onClick={() => setMod("actividades")}
                    >
                        Modulo actividades
                    </button>
                    <button className="btn btn-info ml-2 mt-4 mb-4"
                        onClick={() => setMod("sliders")}
                    >
                        Modulo carrusel inicio
                    </button>

                </Row>

                {
                    mod === "noticias" 
                    ? <div className="container mx-auto border shadow mb-3">
                        <Row className="container mx-auto ">
                            <ModuloNoticias />
                        </Row>
                      </div>
                    : null
                }
                {
                    mod === "sliders" 
                    ? <div className="container mx-auto border shadow mb-3">
                        <Row className="container mx-auto ">
                            <ModuloSlders />
                        </Row>
                      </div>
                    : null
                }
                
            </div>
    )
}

export default withRouter(Dashboard)