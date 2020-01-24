import React, { Component } from 'react'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Topbar from './componentes/base/Topbar';
import Botbar from './componentes/base/Botbar';
import Contbar from './componentes/base/Contbar';

import Home from './componentes/inicio/Cont_inicio'
import About from './componentes/nosotros/About'
import Servicios from './componentes/servicios/Servicios'
import Sector from './componentes/sector/Sector'



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
            <Route path="/sector" component={Sector}/>
          </Router>
        </div>
        <br />
        <Botbar/>
      </div>
    );
  }
}
export default App;
