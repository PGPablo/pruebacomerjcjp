import React, { Component } from 'react'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Topbar from './componentes/base/Topbar';
import Botbar from './componentes/base/Botbar';
import Contbar from './componentes/base/Contbar';

import Home from './componentes/inicio/Cont_inicio'
import About from './componentes/nosotros/About'
import Servicios from './componentes/servicios/Servicios'
import Info from './componentes/info/Info'
import ContactUs from './componentes/contacto/emailjs'
import Ventas from './componentes/ventas/Ventas'



import './estilos/App.css'

class App extends Component {

  render() {
    return (
      <div className="App color_fondo">
        <Topbar />
        <header className="App-header sticky-top color_contbar">
          <Contbar />
        </header>
        <div className="mt-3">
          <Router>
            <Route path="/home" component={Home}/>
            <Route exact path="/" render={() => (
              <Redirect
                to='/home'
              />
            )}
            />
            <Route path="/about" component={About}/>
            <Route path="/services" component={Servicios}/>
            <Route path="/info" component={Info}/>
            <Route path="/contact" component={ContactUs}/>
            <Route path="/sales" component={Ventas}/>

          </Router>
        </div>
        <br />
        
        <h5 className="estilo_letra_Open_Sans_Condensed">Ojala algún día el valor de las personas séa monetario</h5> <br />
        <h5 className="estilo_letra_Abel">Ojala algún día el valor de las personas séa monetario</h5><br />
        <h5 className="estilo_letra_Montserrat_Alternates">Ojala algún día el valor de las personas séa monetario</h5><br />
        <h5 className="estilo_letra_Poiret_One">Ojala algún día el valor de las personas séa monetario</h5><br />
        <h5 className="estilo_letra_Julius_Sans_One">Ojala algún día el valor de las personas séa monetario</h5><br />
        <h5 className="estilo_letra_Bungee_Hairline">Ojala algún día el valor de las personas séa monetario</h5><br />
        <h5 className="estilo_letra_Pompiere">Ojala algún día el valor de las personas séa monetario</h5><br />
        <h5 className="estilo_letra_Athiti">Ojala algún día el valor de las personas séa monetario</h5><br />

        <Botbar/>
      </div>
    );
  }
}
export default App;
