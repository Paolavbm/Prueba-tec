import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { buscadoReducers } from '../reducers/buscadorReducer';
import { encontradoRedu } from '../reducers/encontradoRedu';
import { loginReducer } from '../reducers/loginReducer';
import { pokesFavReducer } from '../reducers/pokeFavsReducers';
import { pokemonesReducer } from '../reducers/pokemonesReducers';
const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  pokemones: pokemonesReducer,
  login: loginReducer,
  pokemonesFav: pokesFavReducer,
  buscador: buscadoReducers,
  encontrado: encontradoRedu
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
)