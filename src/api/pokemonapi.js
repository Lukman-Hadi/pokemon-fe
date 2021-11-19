import axios from 'axios';
import {config} from '../config';

export async function getAllPokemon(){
    return await axios.get(`${config.pokemon_api}?limit=200`)
}

export async function getPokemon(link){
    console.log(link)
    return await axios.get(link);
}