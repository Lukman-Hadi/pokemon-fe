import { FETCH_MY_POKEMON, USER_LOGIN,USER_LOGOUT } from './constant';
let initialState = localStorage.getItem('auth')?JSON.parse(localStorage.getItem('auth')):null;

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case USER_LOGIN:
            return { user: action.user}
        case USER_LOGOUT:
            return { user: null, pokemon: null }
        default:
            return state;
    }
}