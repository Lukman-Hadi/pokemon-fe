import { combineReducers,createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import authReducer from '../features/Auth/reducer'
import pokemonReducer from '../features/Pokemon/reducer';
import singlePokemonReducer from '../features/SelectedPokemon/reducer';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
    auth: authReducer,
    allPokemon:pokemonReducer,
    singlePokemon:singlePokemonReducer
});
const store = createStore(rootReducers,composeEnchancer(applyMiddleware(thunk)));

export default store;