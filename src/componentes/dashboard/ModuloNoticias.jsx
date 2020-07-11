import React from 'react'
import moment from 'moment'
import ModalNoticias from './ModalNoticias'

//Estilo
import {Row, Table} from 'react-bootstrap'

//Redux
import {useDispatch, useSelector} from 'react-redux'
import {obtenerNoticiasAction} from '../../redux/noticiasDucks'

//Estilo
import styles from './style.module.scss'

const ModuloNoticias = () => {
    const dispatch = useDispatch()
    const noticias = useSelector(store => store.noticias.listaNoticias)
    const loading = useSelector(store => store.noticias.loading)


    const [modal, setModal] = React.useState(false) 
    const [noticia, setNoticia] = React.useState(null)

    React.useEffect(() => {
        const fetchData = () => {
            dispatch(obtenerNoticiasAction())
        }
        fetchData()
    }, [dispatch])


    const activarModal = (noticia) => {
        setModal(true)
        setNoticia(noticia)
    }

    const desactivarModal = () => {
        setModal(false)
    }

    return !loading ? (
        <div className="mx-auto">
                <div className="container mx-auto  ">
                    <Row className="m-3">
                        <button className="btn btn-outline-success"
                            onClick={() => activarModal() }>
                                Agregar noticias
                        </button>
                    </Row>
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Autor</th>
                            <th>Titulo</th>
                            <th>Subtitulo</th>
                            <th>Contenido</th>
                            <th>Fecha</th>
                            <th>Imagen</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {noticias ? (noticias.map((row) => {
                            return(
                                <tr key={row.id} >
                                    <td>{row.autor}</td>
                                    <td>{row.titulo}</td>
                                    <td>{row.subtitulo}</td>
                                    <td>{row.contenido}</td>
                                    <td>{moment(row.fecha).format('DD/MM/YYYY hh:mm a')}</td>
                                    <td>
                                        <img src={row.imagenurl} alt="..." className={styles.imagen_tabla} />
                                    </td>
                                    <td>
                                        <button className="btn btn-warning"
                                            onClick={() => activarModal(row) }>
                                                Modificar
                                        </button>
                                    </td>
                                </tr>
                            )
                            }) ) : null
                        }
                    </tbody>
                </Table>

                {modal && <ModalNoticias 
                                noticia={noticia}
                                onClose={() => desactivarModal()}  /> }
            </div>
    ) : (
        <div className="container border m-5 text-center">
          <div className="spinner-grow text-info m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    
}

export default ModuloNoticias

