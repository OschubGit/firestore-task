import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import obtenerPokemonesAccion from '../redux/pokeDucks';
import usuarioReducer, {userCurrentUser} from '../redux/usuarioDucks';

const rootReducer = combineReducers({
    pokemones: obtenerPokemonesAccion,
    usuario: usuarioReducer,
})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    userCurrentUser()(store.dispatch)
    return store;
}