import React from 'react'
import {Carousel, Image}  from 'react-bootstrap'

import ScrollAnimation from 'react-animate-on-scroll';

import '../../estilos/Info.css'
import c21 from '../../assets/carousel/c21.jpg'
import c22 from '../../assets/carousel/c22.jpg'
import c23 from '../../assets/carousel/c23.jpg'
import c24 from '../../assets/carousel/c24.jpg'


const Info = () => (

  <div className="">
    <div className="renglon estilo_titulo_sector">
      <h2 className="titulo_info w-100 estilo_letra_Open_Sans_Condensed">Proyectos</h2> <br />
      <h4 className="subtitulo_info estilo_letra_Athiti">Buscamos participar, capacitarnos y seguir actualizandonos en el sector agroalimentario, ademas de incorporar a nuestros clientes a nuestra familia JC & JP.</h4>
    </div> <br />
    <div className="estilo_carousel_dos">
    <ScrollAnimation animateIn="rollIn" animateOut="rollOut">
      <Carousel className="estilo_carousel_dos m-2">
        <Carousel.Item>
          <img
            className="d-block w-100 altura_img_carousel_dos"
            src={c21}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="texto_carousel_dos">Hortalizas y Hortaflores</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 altura_img_carousel_dos"
            src={c22}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="texto_carousel_dos">Fertilizantes</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 altura_img_carousel_dos"
            src={c23}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="texto_carousel_dos">Herbicidas</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 altura_img_carousel_dos"
            src={c24}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="texto_carousel_dos">Coadyubantes</h3>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </ScrollAnimation>




      <div className="m-4 border shadow centrar_imagenes_info">
        <Image src={c21} className="ml-4 mr-4 tamaño_im_thumbnail"/>
        <Image src={c22} className="ml-4 mr-4 tamaño_im_thumbnail"/>
        <Image src={c23} className="ml-4 mr-4 tamaño_im_thumbnail"/>
        <Image src={c24} className="ml-4 mr-4 tamaño_im_thumbnail"/>
      </div>
    </div><br /><br />


    <div className="container">
      <h2 className="titulo_info w-100 estilo_letra_Open_Sans_Condensed">Logros y actividades</h2> <br />
      <h4 className="subtitulo_info estilo_letra_Athiti">
        Buscamos participar, capacitarnos y seguir actualizandonos en
        el sector agroalimentario, ademas de incorporar a nuestros clientes
        a nuestra familia JC & JP.
      </h4><br />

      <div className="row">
      <iframe width="560" title="expo_agraria" height="315" src="https://www.youtube.com/embed/8zR_ksPd7p8"
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen className="col-6" ></iframe>
      <h5 className="col-6 border shadow texto_info estilo_letra_Athiti" >Asistencia a Expo Agroalimentaria
          Llevadas a cabo en 2015, 2017, 2018 y 2019.
          Asistencia a 6to Foro Agroalimentario que llevo acabo el consejo estatal, INFORUM Irapuato, GTO.
          El reajuste de los mercados agropecuarios con la renegociación del TLCAN”, Septiembre 2017.
      </h5>
      </div>


    </div>


  </div>

)

export default Info
