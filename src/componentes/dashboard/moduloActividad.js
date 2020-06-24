import React from 'react'
import moment from 'moment'
import ModalActividad from './modalNoticia'
import { ActividadesContext } from '../../context/actividades'
import {Row, Table} from 'react-bootstrap'
import Button from '@material-ui/core/Button';

class ModuloActividad extends React.Component {
    state = {
        actividadID: null,
    }
    render() {
        const {
            actividades
        } = this.context
        const {
            actividadID,
            isOpen,
        } = this.state

        const actividad = actividades.find(n => n.id === actividadID)
        return (
            <div className="mx-auto">
                <div className="container mx-auto ">
                    <Row className="m-3">
                        <Button variant="outlined" color="secondary"
                            onClick={ () => this.setState({isOpen: true, actividadID: null})}>
                                Agregar actividades
                        </Button>
                    </Row>
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Descripción</th>
                            <th>Fecha</th>
                            <th>ID Galeria</th>
                            <th>Tipo de actividad</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actividades.map((row) => {
                            return(
                                <tr key={row.titulo} >
                                    <td>{row.descripcion}</td>
                                    <td>{moment(row.fecha).format('DD/MM/YYYY hh:mm a')}</td>
                                    <td>{row.galeria}</td>
                                    <td>{row.tipo}</td>
                                    <td></td>
                                    <td>
                                        <Button variant="outlined" color="secondary"
                                        onClick={ () => { this.setState({ actividadID: row.id, isOpen: true }) } }>
                                            Modificar
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

                {isOpen && <ModalActividad
                                actividad={actividad} 
                                onClose={() => this.setState({actividadID: null, isOpen: false}) } /> }
            </div>
        )
    }
}

ModuloActividad.contextType = ActividadesContext
export default ModuloActividad