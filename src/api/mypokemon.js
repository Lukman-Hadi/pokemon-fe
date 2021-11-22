import axios from 'axios';
import { config } from '../config';

export async function catchPokemon() {
    return await axios.get(`${config.catcher_api}/api/mypokemon/catch`);
}
export async function fetchPokemon(id) {
    return await axios.get(`${config.catcher_api}/api/mypokemon/${id}`);
}
export async function savePokemon(data){
    return await axios.post(`${config.catcher_api}/api/mypokemon`, data)
}
export async function releasePokemon(){
    return await axios.get(`${config.catcher_api}/api/mypokemon/release`);
}
export async function deletePokemon(id){
    return await axios.delete(`${config.catcher_api}/api/mypokemon/delete/${id}`);
}
export async function renamePokemon(id,data){
    return await axios.put(`${config.catcher_api}/api/mypokemon/rename/${id}`,data);
}