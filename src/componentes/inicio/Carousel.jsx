import React from 'react'
import { Carousel } from 'react-bootstrap'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ScrollAnimation from 'react-animate-on-scroll';

import { useSelector } from 'react-redux'

import './style.css'

import d1 from '../../assets/cards/d1.jpg'


const CarouselInicio = () => {

  const sliders = useSelector(store => store.sliders.listaSliders)

  return (
    <div className="row w-100 estilo_renglon">

      <div className="container-carousel border shadow col-sm-11 col-md-11 col-lg-7 col-xl-7" >

        <Carousel>

          {
            sliders ? ( sliders.map(row => {
              return (
                <Carousel.Item key={row.id}>
                  <img className="d-block w-100 img_carousel"
                    src={row.imagenurl}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>{row.titulo}</h3>
                    <p>{row.subtitulo}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
              } 
            )) : 
            (
              <div className="spinner-grow text-danger m-5" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )
          }


        </Carousel>

      </div>

      <div className="col-sm-11 col-md-11 col-lg-4 col-xl-4">
        <ScrollAnimation animateIn="bounceInRight">
          <Card className="tamaño_card_inicio">
            <CardActionArea>
              <CardMedia
                className="tamaño_card_imagen_inicio"
                image={d1}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className="estilo_letra_Open_Sans_Condensed">
                  Productos agrícolas
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className="estilo_letra_Julius_Sans_One">
                  Contamos con una gran cantidad de productos agrícolas, listos para ser utilizados.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions >
              <Button href="/info" size="small" color="primary" className="estilo_letra_Julius_Sans_One">
                Ver más.
              </Button>
            </CardActions>
          </Card>
        </ScrollAnimation>

      </div>


    </div>
  )

}

export default CarouselInicio
