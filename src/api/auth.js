import axios from 'axios';
import { config } from '../config';

export async function registerUser(data) {
    return await axios.post(`${config.catcher_api}/auth/register`, data).then(respose=>{return respose.data});
}
export async function login(data) {
    return await axios.post(`${config.catcher_api}/auth/login`, data);
}
export async function logout() {
    let { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};
    return await axios.post(`${config.catcher_api}/auth/logout`, null, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then((response) => {
        localStorage.removeItem('auth');
        return response;
    });
}