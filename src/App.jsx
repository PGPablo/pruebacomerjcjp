import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css'

//Base
import Topbar from './componentes/base/Topbar';
import Botbar from './componentes/base/Botbar';
import Contbar from './componentes/base/Contbar';

//Component
import Home from './componentes/inicio/Cont_inicio'
import About from './componentes/nosotros/About'
import ServAgricola from './componentes/servicios/ServAgricola'
import ServArquitectura from './componentes/servicios/ServArquitectura'
import ServMantenimiento from './componentes/servicios/ServMantenimiento'
import Info from './componentes/info/Info'
import ContactUs from './componentes/contacto/emailjs'
import Ventas from './componentes/ventas/Ventas'
import Noticias from './componentes/noticias/Noticias'
import LoginForm from './login/loginForm'
import Dashboard from './componentes/dashboard/dashboard'

//Cookies
import CookieConsent from "react-cookie-consent";

//Firebase 
import { auth } from './firebase'


function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged(user => {
        if (user) {
          setFirebaseUser(user)
        } else {
          setFirebaseUser(null)
        }
      })
    }
    fetchUser()
  }, [])

  const RutaPrivada = ({ component, path, ...rest }) => {
    if (localStorage.getItem('usuario')) {
      const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
      if (usuarioStorage.uid === firebaseUser.uid) {
        return <Route component={component} path={path} {...rest} />
      } else {
        return <Redirect to="/login" {...rest} />
      }
    } else {
      return <Redirect to="/login" {...rest} />
    }
  }

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
      {
        firebaseUser !== false ? (
          <div className="mt-3">
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
                <Route path="/notice" component={Noticias} />
                <Route path="/login" component={LoginForm} />
                <RutaPrivada path="/dashboard" component={Dashboard} />

              </Switch>

            </Router>
          </div>
        ) : (
            <div className="container text-center">
              <div className="spinner-grow posicion_spinner text-info mt-5 mb-5" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )
      }

      <br />

      <Botbar />
    </div>
  );
}
export default App;
