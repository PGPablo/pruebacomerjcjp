import React from 'react'
import ReactDOM from 'react-dom'

import Button from '../layout/tools/button'
import TextField from '../layout/tools/textfield'
import FormControl from '../layout/tools/formcontrol'
import Paragraph from '../layout/tools/paragraph'

import {createActividades, deleteActividades, updateActividades} from '../../services/firebase'

import { Formik } from 'formik'
import * as yup from 'yup'

import styles from './style.module.scss'

const formSchema = yup.object().shape({
    titulo: yup.string().min(3).required(),
    descripcion: yup.string().min(3).required(),
    galeria: yup.number().min(1).required(),
    tipo: yup.string().min(3).required(),
})

class ModalActivdad extends React.Component {

    onSubmit = async (values, formikBag) => {
        const {
            actividad,
            onClose
        } = this.props

        if(actividad.id){
            await updateActividades(actividad.id, values)
        }else{
            await createActividades(values)
        }   
        formikBag.setSubmitting(false)
        onClose()
    }

    onCancel = () => {
        this.props.onClose()
    }

    onDelete = async () => {
        const {
            actividad,
            onClose
        } = this.props
        await deleteActividades(actividad.id)
        onClose()
    }

    render() {
        const {
            actividad,
            onClose,
        } = this.props
        const nodo = (
            <div className={styles.modalContainer}>
                <div className={styles.modalBox}>
                    <h1>Actividades</h1>
                    <Formik
                        initialValues={{
                            titulo: actividad.titulo || '',
                            descripcion: actividad.subtitulo || '',
                            tipo: actividad.contenido || '',
                            galeria: actividad.autor || '',
                            fecha: actividad.fecha || Date.now(),
                        }}
                        validationSchema={formSchema}
                        onSubmit={this.onSubmit}
                        render={(props) => {
                            const {
                                values,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                isValid,
                            } = props
                            return (
                                <React.Fragment>
                                    <FormControl type="row">
                                        <TextField 
                                            value={values.autor}
                                            onChange={handleChange('autor')}
                                            onBlur={handleBlur('autor')}
                                            placeholder="Autor"
                                        />
                                    </FormControl>
                                    <FormControl type="block">
                                        <TextField
                                            value={values.titulo}
                                            onChange={handleChange('titulo')}
                                            onBlur={handleBlur('titulo')}
                                            placeholder="Titulo"
                                        />
                                        <TextField
                                            value={values.subtitulo}
                                            onChange={handleChange('subtitulo')}
                                            onBlur={handleBlur('subtitulo')}
                                            placeholder="Subtitulo"
                                        />
                                    </FormControl>
                                    <FormControl type="row">
                                        <Paragraph rows="10"
                                            value={values.contenido}
                                            onChange={handleChange('contenido')}
                                            onBlur={handleBlur('contenido')}
                                            placeholder="Contenido"
                                        />
                                    </FormControl>
                                    <FormControl type="block">
                                        <Button
                                            type="regular"
                                            onClick={handleSubmit}
                                            label={noticia.id ? "Modificar" : "Crear"}
                                            disable={isSubmitting || !isValid}
                                        />
                                        { noticia.id && <Button
                                            type="warning"
                                            onClick={this.onDelete}
                                            label="Eliminar"
                                            disbled={false}
                                        />}
                                        <Button
                                            type="outline"
                                            onClick={this.onCancel}
                                            label="Salir"
                                            disbled={false}
                                        />
                                    </FormControl>
                                </React.Fragment>
                            )
                        }}
                    >
                    </Formik>
                </div>
            </div>
        )
        return ReactDOM.createPortal(nodo, document.getElementById("modal-root"))
    }
}

ModalActivdad.defaultProps = {
    noticia: {},
}
export default ModalActivdad