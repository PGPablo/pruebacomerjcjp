// Base
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Estilo y apariencia 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "animate.css/animate.min.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

//Redux
import {Provider} from 'react-redux'
import generateStore from './redux/store'

//Inicializacion de store
const store = generateStore()

//Libreria de icionos
library.add(fab, fas)

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
    document.getElementById('root')
  );


