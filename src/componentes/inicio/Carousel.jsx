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

import logo from '../../assets/logocomer2.png'

import s1 from '../../assets/carousel/s1.jpg'
import s2 from '../../assets/carousel/s2.JPG'
import s3 from '../../assets/carousel/s3.JPG'
import s4 from '../../assets/carousel/s4.JPG'

import d1 from '../../assets/cards/d1.jpg'


const CarouselInicio = () => (
  <div className="renglon">

    <div className="centrar_carousel container-carousel border shadow" >
      <ScrollAnimation animateIn="rotateInDownLeft" duration="2">
        <Carousel className=" altura_carousel" interval="6000">
          <Carousel.Item>
            <img className="d-block w-100 img_carousel"
              src={s1}
              alt="Third slide"
            />
            <Carousel.Caption>
                <ScrollAnimation animateIn="bounceInRight" delay="3000">
                  <img className="img_carousel_contenido"
                    src={logo}
                    alt="logo"
                  />
                </ScrollAnimation>
                <h3>Comercializadora de materiales JC & JP</h3>
                <p>Calidad en nuestros productos.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 img_carousel"
              src={s2}
              alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Nuestra experiencia nos resplada</h3>
                <p>Y nuestro profesionalismo nos hace trascender.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 img_carousel"
              src={s3}
              alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Proyectos de calidad</h3>
                <p>La satisfacción de nuestros clientes es lo más importante.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 img_carousel"
              src={s4}
              alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Permitenos ser parte de tus actividades</h3>
            </Carousel.Caption>
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

)

export default CarouselInicio
