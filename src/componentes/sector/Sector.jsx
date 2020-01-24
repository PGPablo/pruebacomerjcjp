import React from 'react'
import {Carousel, Image}  from 'react-bootstrap'

import '../../estilos/Sector.css'
import c21 from '../../assets/carousel/c21.jpg'
import c22 from '../../assets/carousel/c22.jpg'
import c23 from '../../assets/carousel/c23.jpg'
import c24 from '../../assets/carousel/c24.jpg'


const Sector = () => (

  <div className="">
    <div className="renglon estilo_titulo_sector">
      <h2>Sector agricola</h2>
      <h4>Tenemos a la venta productos de giro agricola, podemos ofrecerte desde semillas, fertilizantes, agroquimicos, hortalizas, hortaflores y mas. revisa todo lo que podemos ofrecerte en nuestro catalago digital haciendo clic .</h4>
    </div>
    <div className="estilo_carousel_dos border shadow">

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


      <div className="renglon m-4 border shadow">
        <Image src={c21} thumbnail className="ml-5 mr-4 tamaño_im_thumbnail"/>
        <Image src={c22} thumbnail className="ml-4 mr-4 tamaño_im_thumbnail"/>
        <Image src={c23} thumbnail className="ml-4 mr-4 tamaño_im_thumbnail"/>
        <Image src={c24} thumbnail className="ml-4 mr-4 tamaño_im_thumbnail"/>
      </div>

    </div>
  </div>

)

export default Sector
