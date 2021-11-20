import {START_FETCHING_ALL_POKEMON,SUCCESS_FETCHING_ALL_POKEMON,FAILED_FETCHING_ALL_POKEMON} from './constant';

const statuslist = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
}

const intialState = localStorage.getItem('allPokemon')?JSON.parse(localStorage.getItem('allPokemon')):{
    status:statuslist.idle,
    count: 0,
    results: []
};

export default function reducer(state = intialState, action) {
    switch (action.type) {
        case START_FETCHING_ALL_POKEMON:
            return { ...state, status:statuslist.process }
        case FAILED_FETCHING_ALL_POKEMON:
            return { ...state, status:statuslist.error }
        case SUCCESS_FETCHING_ALL_POKEMON:
            return { ...state, status:statuslist.success, results:action.results, count:action.count}
        default:
            return state
    }
}