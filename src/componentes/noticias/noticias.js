//librerias
import React from 'react'
import moment from 'moment'

//Componentes
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Contexto
import { NoticiasContext } from '../../context/noticias'

//Estilo
import "./styles.css"

//Media
import n1 from './n1.jpg'

class Noticias extends React.Component {

    render() {
        const {
            noticias
        } = this.context
        return (
            <div className="conteiner border shadow contenedor_noticias">
                {
                    noticias.map((noticia) => {
                        return(
                            <ExpansionPanel key={noticia.id} className=" mt-4 mb-4 ml-3 mr-3">
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className="titulo_noticia border">{noticia.titulo} </Typography>
                                    <Typography className="subtitulo_noticia border">{noticia.subtitulo}</Typography>

                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Grid container spacing={3}>
                                        <Grid item sm={6} xs={12}>
                                            <Paper className="">
                                                <img className="cont_img_noticia" src={n1} alt="Hola" />    
                                            </Paper>
                                        </Grid>
                                        <Grid item sm={6} xs={12}>
                                            <Paper className="">
                                                <Typography className="cont_contenido"> 
                                                    {noticia.contenido}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper className="pie_noticia">
                                                {noticia.autor + " - " + moment(noticia.fecha).format('DD/MM/YYYY hh:mm a')}
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            )   
                        }
                    )
                }
            </div>
        )
    }
}

Noticias.contextType = NoticiasContext
export default Noticias