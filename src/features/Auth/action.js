// (1) import constant
import { USER_LOGIN, USER_LOGOUT,FETCH_MY_POKEMON } from "./constant";

// (2) action userLogin 
export function userLogin(user){
  return {
    type: USER_LOGIN,
    user,
  }
}

// (3) action userLogout
export function userLogout(){
  localStorage.clear();
  return {
    type: USER_LOGOUT
  }
}