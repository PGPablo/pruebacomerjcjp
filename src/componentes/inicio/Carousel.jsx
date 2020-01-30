import React from 'react'
import {Carousel}  from 'react-bootstrap'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ScrollAnimation from 'react-animate-on-scroll';

import '../../estilos/Carousel.css'

import c1 from '../../assets/carousel/c1.jpg'
import c2 from '../../assets/carousel/c2.jpg'
import c3 from '../../assets/carousel/c3.jpg'

import d1 from '../../assets/cards/d1.jpg'


const CarouselInicio = () => (
  <div className="renglon">

    <div className="centrar_carousel container-carousel border shadow" >
    <ScrollAnimation animateIn="rotateInDownLeft" duration="2">
        <Carousel className=" altura_carousel">
          <Carousel.Item>
            <img className="d-block w-100 img_carousel"
              src={c1}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img_carousel"
              src={c2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img_carousel"
              src={c3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        </ScrollAnimation>
      </div>


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
              Productos agricolas
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className="estilo_letra_Julius_Sans_One">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions >
          <Button size="small" color="primary" className="estilo_letra_Julius_Sans_One">
            Share
          </Button>
          <Button size="small" color="primary" className="estilo_letra_Julius_Sans_One">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </ScrollAnimation>



  </div>

)

export default CarouselInicio
