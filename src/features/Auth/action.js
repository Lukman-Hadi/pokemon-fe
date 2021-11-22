// (1) import constant
import { USER_LOGIN, USER_LOGOUT,FETCH_MY_POKEMON } from "./constant";

// (2) action userLogin 
export function userLogin(user){
  return {
    type: USER_LOGIN,
    user,
  }
}

export function fetchMyPokemon(pokemon){
  return {
    type: FETCH_MY_POKEMON,
    pokemon
  }
}

// (3) action userLogout
export function userLogout(){
  return {
    type: USER_LOGOUT
  }
}