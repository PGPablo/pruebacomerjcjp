import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'

import {crearNoticiasAction, modificarNoticiasAction, eliminarNoticiasAction} from '../../redux/noticiasDucks'

import styles from './style.module.scss'


const ModalNoticias = (props) => {
    const dispatch = useDispatch()

    const [titulo, setTitulo] = React.useState("")
    const [subtitulo, setSubtitulo] = React.useState("")
    const [contenido, setContenido] = React.useState("")
    const [autor, setAutor] = React.useState("")
    const [imagen, setImagen] = React.useState("")
    const [accion, setAccion] = React.useState("")
    const [error, setError] = React.useState("")


    React.useEffect(() => {
        if (props.noticia) {
            setAccion('actualizar')
            setTitulo(props.noticia.titulo)
            setSubtitulo(props.noticia.subtitulo)
            setContenido(props.noticia.contenido)
            setAutor(props.noticia.autor)
            setImagen(props.noticia.imagenurl)
        } else {

        }
    }, [props])

    const accionFormNoticia = (cerrarModal) => {
        if (!titulo.trim() || !subtitulo.trim() || !contenido.trim() || !autor.trim()) {
            setError('Alguno de los campos esta vacio')
            return
        }
        if( imagen === ""){
            setError('Seleccione una imagen, de preferencia con formato jpg o png')
            return
        }
        
        const noticiaData = {
            titulo: titulo,
            subtitulo: subtitulo,
            contenido: contenido,
            imagenurl: imagen,
            autor: autor,
            fecha: Date.now()
        }
        if( accion === 'actualizar'){
            dispatch(modificarNoticiasAction(noticiaData, props.noticia.id))
            setError("")
            cerrarModal()
        }else{
            dispatch(crearNoticiasAction(noticiaData))
            setError("")
            cerrarModal()
        }
    }
    const eliminarNoticia = (cerrarModal) => {
        dispatch(eliminarNoticiasAction(props.noticia.id, imagen))
        setError("")
        cerrarModal()
    }

    const nodo = (
        <div className={styles.modalContainer}>
            <div className={styles.modalBox}>
                <h4>
                    {
                        accion === 'actualizar' ? 'Modificar noticia' : 'Crear noticia'
                    }
                </h4>
                {
                    error !== "" &&
                    <div className="alert alert-warning mt-3">
                        {error}
                    </div>
                }
                <div className="form-group form-row">
                    <div className="col">
                        <input type="text"
                            className="form-control"
                            id="titulo_noticia"
                            placeholder="Titulo"
                            value={titulo}
                            onChange={e => setTitulo(e.target.value)} />
                    </div>
                    <div className="col">
                        <input type="text"
                            className="form-control"
                            id="subtitulo_noticia"
                            placeholder="Subtitulo"
                            value={subtitulo}
                            onChange={e => setSubtitulo(e.target.value)} />
                    </div>
                </div>

                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        id="autor_noticia"
                        placeholder="Autor"
                        value={autor}
                        onChange={e => setAutor(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="imagenurl_input">Imagen</label>
                    {
                        accion === 'actualizar' && <div>
                            <img src={imagen} alt="..." className={styles.imagen_modal} />
                            <br />
                        </div>
                    }


                    <input type="file"
                        className="form-control-file"
                        id="imagenurl_noticia"
                        onChange={e => setImagen(e.target.files[0])} />
                </div>

                <div className="form-group">
                    <textarea className="form-control"
                        id="contenido_noticia"
                        rows="3"
                        placeholder="Contenido"
                        value={contenido}
                        onChange={e => setContenido(e.target.value)} >
                    </textarea>
                </div>
                <div className="form-group">
                    <button type="submit"
                        className="btn btn-outline-info"
                        onClick={() => accionFormNoticia(props.onClose)}>
                        {
                            accion === 'actualizar' ? 'Modificar' : 'Crear'
                        }
                    </button>
                    {
                        accion === 'actualizar' && <button className="btn btn-outline-danger ml-2"
                                                           onClick={() => eliminarNoticia(props.onClose)}>
                                                            Eliminar
                                                    </button>
                    }
                    <button className="btn btn-outline-dark float-right"
                        onClick={props.onClose}>
                        Salir
                    </button>
                </div>
            </div>
        </div>
    )

    return ReactDOM.createPortal(nodo, document.getElementById("modal-root"))
}

export default ModalNoticias
