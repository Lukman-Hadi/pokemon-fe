import {START_FETCHING_ALL_POKEMON,SUCCESS_FETCHING_ALL_POKEMON, FAILED_FETCHING_ALL_POKEMON} from './constant';
import { getAllPokemon } from '../../api/pokemonapi';


export const fetchingAllPokemon = () =>{
    return {
        type:START_FETCHING_ALL_POKEMON
    }
}
export const fetchAllPokemon=() =>{
    return async (dispatch)=>{
        dispatch(fetchingAllPokemon());
        try{
            let {data:{results,count}} = await getAllPokemon();
            dispatch(successFetchingAllPokemon({results,count}))
        }catch(err){
            dispatch(failedFetchALlPokemon());
        }
    }
}
export const failedFetchALlPokemon = ()=>{
    return {
        type : FAILED_FETCHING_ALL_POKEMON
    }
}
export const successFetchingAllPokemon = ({results,count}) =>{
    return {
        type:SUCCESS_FETCHING_ALL_POKEMON,
        results,
        count
    }
}