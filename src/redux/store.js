import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usuarioReducer, {leerUsuarioActivoAccion} from './userDucks'
import noticiaReducer, {obtenerNoticiasAction} from './noticiasDucks'

const rootReducer = combineReducers({
    usuario: usuarioReducer,
    noticias: noticiaReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer,  composeEnhancers( applyMiddleware(thunk) ))
    obtenerNoticiasAction()(store.dispatch)
    leerUsuarioActivoAccion()(store.dispatch)
    
    return store;
}