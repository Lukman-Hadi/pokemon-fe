import store from './store';

let currentAuth;
let currentPokemonList;

function listener() {
    let previousAuth = currentAuth;
    let previousPokemonList = currentPokemonList;
    currentPokemonList = store.getState().allPokemon;
    if(currentPokemonList!==previousPokemonList){
        localStorage.setItem('allPokemon', JSON.stringify(currentPokemonList));
    }
    currentAuth = store.getState().auth;
    if (currentAuth !== previousAuth) {
        localStorage.setItem('auth', JSON.stringify(currentAuth));
    }
}

function listen() {
    store.subscribe(listener);
}

export { listen }