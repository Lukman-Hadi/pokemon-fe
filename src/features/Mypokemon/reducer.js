import {FETCH_MY_POKEMON,SAVE_MY_POKEMON } from "./constant";

let initialState = [];

export default function reducer(state = initialState, action){
    switch(action.type){
        case FETCH_MY_POKEMON:
            return {pokemon:action.pokemon};
        case SAVE_MY_POKEMON:
            return {pokemon:action.pokemon};
        default:
            return state;
    }
}