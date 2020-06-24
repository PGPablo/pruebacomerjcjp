import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Topbar from './componentes/base/Topbar';
import Botbar from './componentes/base/Botbar';
import Contbar from './componentes/base/Contbar';

import Home from './componentes/inicio/Cont_inicio'
import About from './componentes/nosotros/About'
import ServAgricola from './componentes/servicios/ServAgricola'
import ServArquitectura from './componentes/servicios/ServArquitectura'
import ServMantenimiento from './componentes/servicios/ServMantenimiento'
import Info from './componentes/info/Info'
import ContactUs from './componentes/contacto/emailjs'
import Ventas from './componentes/ventas/Ventas'
import Forrajera from './forrajera/componentes/Forrajera'
import Noticias from './componentes/noticias/noticias'

import LoginForm from './login/login'
import Dashboard from './componentes/dashboard/dashboard'

//Cookies
import CookieConsent from "react-cookie-consent";

//Contexto
import { AuthContextProvider } from './context/auth'
import { NoticiasContextProvider } from './context/noticias'
import { ActividadesContextProvider } from './context/actividades'
import { SlidersContextProvider } from './context/sliders'

//Rutas
import GuardRoute from './componentes/root/guardRoute'
import Root from './componentes/root/root'

import './estilos/App.css'


class App extends Component {

  render() {
    return (
      <div className="App color_fondo">
        <CookieConsent
          location="bottom"
          buttonText="Seguro!"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#212F3C" }}
          buttonStyle={{ color: "#000000", fontSize: "13px", background: "#ffffff", width: "100px" }}
          expires={150}
        >
          Este sitio web puede usar cookies.
      </CookieConsent>
        <Topbar />
        <header className="App-header color_contbar tamaño-contbar">
          <Contbar />
        </header>
        <div className="mt-3">
          <AuthContextProvider>
            <NoticiasContextProvider>
              <ActividadesContextProvider>
                <SlidersContextProvider>
                  <Router>
                    <Switch>
                      <Route path="/home" component={Home} />
                      <Route exact path="/" render={() => (
                        <Redirect
                          to='/home'
                        />
                      )}
                      />
                      <Route path="/about" component={About} />
                      <Route path="/services_S" component={ServAgricola} />
                      <Route path="/services_A" component={ServArquitectura} />
                      <Route path="/services_m" component={ServMantenimiento} />
                      <Route path="/info" component={Info} />
                      <Route path="/contact" component={ContactUs} />
                      <Route path="/sales" component={Ventas} />
                      <Route path="/forrajera" component={Forrajera} />
                      <Route path="/notice" component={Noticias} />


                      <Root>
                        <GuardRoute type="public" path="/login" component={LoginForm} />
                        <GuardRoute type="private" path="/dashboard" component={Dashboard} />
                      </Root>
                      
                    </Switch>
                    
                  </Router>
                </SlidersContextProvider>
              </ActividadesContextProvider>
            </NoticiasContextProvider>
          </AuthContextProvider>
        </div>
        <br />

        <Botbar />
      </div>
    );
  }
}
export default App;
