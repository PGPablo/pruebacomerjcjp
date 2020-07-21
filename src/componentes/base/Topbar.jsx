import React from 'react'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'

import '../../estilos/Topbar.css'

import logo from '../../assets/logocomer2.png'

const Topbar = () => (


  <div className="container-fluid border p-2 mb-2 text-right text-xs color_barra">

    <Navbar className="contenido_inicial" expand="lg">
      <Navbar.Brand href="/home" className="letras_logo posicion_logo">
        <img className="logo_topbar"
          src={logo}
          alt="logo"
        />
      </Navbar.Brand>

      <Navbar.Collapse>
        <Nav className="ml-auto estilo_letra_Julius_Sans_One" >
          <Nav.Link href="/home" className="letras_menu estilo_boton_dropdown">Inicio</Nav.Link>
          <Nav.Link href="/sales" className="letras_menu estilo_boton_dropdown">Ventas</Nav.Link>
          <Dropdown className="estilo_boton_dropdown ">
            <Dropdown.Toggle className="letras_menu estilo_boton_dropdown estilo_letra_Julius_Sans_One"
              variant="success" id="dropdown-basic" >
              Nosotros
          </Dropdown.Toggle>
            <Dropdown.Menu className="superponer_menu ">
              <Dropdown.Item className="letras_menu estilo_letra_Julius_Sans_One" href="/about">Mentalidad</Dropdown.Item>
              <Dropdown.Item className="letras_menu estilo_letra_Julius_Sans_One" href="/info">Información trascendental</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="estilo_boton_dropdown ">
            <Dropdown.Toggle className="letras_menu estilo_boton_dropdown estilo_letra_Julius_Sans_One"
              variant="success" id="dropdown-basic" >
              Servicios
          </Dropdown.Toggle>
            <Dropdown.Menu className="superponer_menu">
              <Dropdown.Item className="letras_menu estilo_letra_Julius_Sans_One" href="/services_S">Sector Agricola</Dropdown.Item>
              <Dropdown.Item className="letras_menu estilo_letra_Julius_Sans_One" href="/services_A">Arquitectura</Dropdown.Item>
              <Dropdown.Item className="letras_menu estilo_letra_Julius_Sans_One" href="/services_M">Mantenimiento electronico industrial</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="/contact" className="letras_menu estilo_boton_dropdown">Contacto</Nav.Link>
          <Nav.Link href="/notice" className="letras_menu estilo_boton_dropdown">Noticias</Nav.Link>
          

        </Nav>
      </Navbar.Collapse>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

    </Navbar>

  </div>
)

export default Topbar
