import React from 'react'
import {Navbar, Nav, Dropdown}  from 'react-bootstrap'

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
        <Nav.Link href="/home" className="letras_menu letras_menu_2">Inicio</Nav.Link>
        <Nav.Link href="/about" className="letras_menu letras_menu_2">Nosotros</Nav.Link>


        <Dropdown className="estilo_boton_dropdown ">
          <Dropdown.Toggle className="letras_menu letras_menu_2 estilo_boton_dropdown estilo_letra_Julius_Sans_One"
                           variant="success" id="dropdown-basic" >
            Servicios
          </Dropdown.Toggle>
          <Dropdown.Menu className="superponer_menu">
            <Dropdown.Item className="letras_menu letras_menu_2 estilo_letra_Julius_Sans_One" href="/services_S">Sector Agricola</Dropdown.Item>
            <Dropdown.Item className="letras_menu letras_menu_2 estilo_letra_Julius_Sans_One" href="/services_A">Arquitectura</Dropdown.Item>
            <Dropdown.Item className="letras_menu letras_menu_2 estilo_letra_Julius_Sans_One" href="/services_M">Mantenimiento electronico industrial</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Nav.Link href="/sales" className="letras_menu letras_menu_4">Ventas</Nav.Link>
        <Nav.Link href="/info" className="letras_menu letras_menu_5">Información trascendental</Nav.Link>
        <Nav.Link href="/contact" className="letras_menu letras_menu_5">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

  </Navbar>

  </div>
)

export default Topbar
