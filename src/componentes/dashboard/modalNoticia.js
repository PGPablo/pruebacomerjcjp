import React from 'react'
import ReactDOM from 'react-dom'

import Button from '../layout/tools/button'
import TextField from '../layout/tools/textfield'
import FormControl from '../layout/tools/formcontrol'
import Paragraph from '../layout/tools/paragraph'

import {createNoticia, deleteNoticia, updateNoticia} from '../../services/firebase'

import { Formik } from 'formik'
import * as yup from 'yup'

import styles from './style.module.scss'

const formSchema = yup.object().shape({
    titulo: yup.string().min(3).required(),
    subtitulo: yup.string().min(3).required(),
    contenido: yup.string().min(3).required(),
    autor: yup.string().min(3).required(),
})

class ModalNoticia extends React.Component {

    onSubmit = async (values, formikBag) => {
        const {
            noticia,
            onClose
        } = this.props

        if(noticia.id){
            await updateNoticia(noticia.id, values)
        }else{
            await createNoticia(values)
        }   
        
        
        
        formikBag.setSubmitting(false)
        onClose()
    }

    onCancel = () => {
        this.props.onClose()
    }

    onDelete = async () => {
        const {
            noticia,
            onClose
        } = this.props
        await deleteNoticia(noticia.id)
        onClose()
    }

    render() {
        const {
            noticia,
            onClose,
        } = this.props
        const nodo = (
            <div className={styles.modalContainer}>
                <div className={styles.modalBox}>
                    <h1>Noticias</h1>
                    <Formik
                        
                        initialValues={{
                            titulo: noticia.titulo || '',
                            subtitulo: noticia.subtitulo || '',
                            contenido: noticia.contenido || '',
                            autor: noticia.autor || '',
                            fecha: noticia.fecha || Date.now(),
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

ModalNoticia.defaultProps = {
    noticia: {},
}
export default ModalNoticia