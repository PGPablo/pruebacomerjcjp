//librerias
import React from 'react'
import moment from 'moment'

//Contexto
import { useSelector } from 'react-redux'

//Style
import "./styles.css"

const Noticias = () => {

    const noticias = useSelector(store => store.noticias.listaNoticias)

    return (
        <div className="container border pt-4">

            <h3 className="text-center titulo_cont_noticias">Lo mas relevante en el mundo de la agronomía.</h3>

            {noticias ? (noticias.map((row) => {
                return (
                        <div className="jumbotron ml-4 mr-4" key={row.id}>
                            <h1 className="display-4"> {row.titulo} </h1>
                            <p className="lead"> {row.subtitulo} </p>
                            <span class="badge badge-dark">
                                {row.autor} - {moment(row.fecha).format('DD/MM/YYYY hh:mm a')}
                            </span>
                            <hr className="my-4" />

                            <div className="row">
                                <div className="col-7">
                                    <p className="text-justify">{row.contenido}</p>
                                </div>
                                <div className="col-5">
                                    <img src={row.imagenurl}
                                        alt="..."
                                        className="tamaño_img_noticia" />
                                </div>
                            </div>
                        </div>
                    )
                })) : null
            }
        </div>
    )
}

export default Noticias
