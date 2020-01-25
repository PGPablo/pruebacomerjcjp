import React from 'react'
import {Navbar, Nav}  from 'react-bootstrap'

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
      <Nav className="ml-auto ">
        <Nav.Link href="/about" className="letras_menu letras_menu_2">Nosotros</Nav.Link>
        <Nav.Link href="/services" className="letras_menu letras_menu_3">Servicios</Nav.Link>
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
