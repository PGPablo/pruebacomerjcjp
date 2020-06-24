import React from 'react'
import moment from 'moment'
import ModalNoticia from './modalNoticia'
import { NoticiasContext } from '../../context/noticias'
import {Row, Table} from 'react-bootstrap'
import Button from '@material-ui/core/Button';

class ModuloNoticias extends React.Component {
    state = {
        noticiaID: null,
    }
    render() {
        const {
            noticias
        } = this.context
        const {
            noticiaID,
            isOpen,
        } = this.state

        const noticia = noticias.find(n => n.id === noticiaID)
        return (
            <div className="mx-auto">
                <div className="container mx-auto  ">
                    <Row className="m-3">
                        <Button variant="outlined" color="secondary"
                            onClick={ () => this.setState({isOpen: true, noticiaID: null})}>
                                Agregar noticias
                        </Button>
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
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {noticias.map((row) => {
                            return(
                                <tr key={row.id} >
                                    <td>{row.autor}</td>
                                    <td>{row.titulo}</td>
                                    <td>{row.subtitulo}</td>
                                    <td>{row.contenido}</td>
                                    <td>{moment(row.fecha).format('DD/MM/YYYY hh:mm a')}</td>
                                    <td>
                                        <Button variant="outlined" color="secondary"
                                        onClick={ () => { this.setState({ noticiaID: row.id, isOpen: true }) } }>
                                            Modificar
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

                {isOpen && <ModalNoticia 
                                noticia={noticia} 
                                onClose={() => this.setState({noticiaID: null, isOpen: false}) } /> }
            </div>
        )
    }
}

ModuloNoticias.contextType = NoticiasContext
export default ModuloNoticias