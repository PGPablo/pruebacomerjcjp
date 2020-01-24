import React from 'react'
import {Carousel}  from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../../estilos/Carousel.css'

import c1 from '../../assets/carousel/c1.jpg'
import c2 from '../../assets/carousel/c2.jpg'
import c3 from '../../assets/carousel/c3.jpg'

import d1 from '../../assets/cards/d1.jpg'

const CarouselInicio = () => (
  <div className="renglon ml-1">
    <div className="centrar_carousel container-carousel border shadow" >
      <Carousel className="m-3 altura_carousel">
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
    </div>
    <Card className="tamaño_card_inicio">
      <CardActionArea>
        <CardMedia
          className="tamaño_card_imagen_inicio"
          image={d1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  </div>

)

export default CarouselInicio
