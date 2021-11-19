import {START_FETCHING_SINGLE_POKEMON,SUCCESS_FETCHING_SINGLE_POKEMON} from './constant';

const statuslist = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
}

const intialState = {
    status:statuslist.idle,
    results: [{
        name:'',
        moves:[],
        types:[]
    }]
};

export default function reducer(state = intialState, action) {
    switch (action.type) {
        case START_FETCHING_SINGLE_POKEMON:
            return { ...state, status:statuslist.process }
        case SUCCESS_FETCHING_SINGLE_POKEMON:
            return { ...state, status:statuslist.success, results:action.data}
        default:
            return state
    }
}