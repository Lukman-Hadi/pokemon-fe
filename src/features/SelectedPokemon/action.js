import {START_FETCHING_SINGLE_POKEMON,SUCCESS_FETCHING_SINGLE_POKEMON} from './constant';
import { getPokemon } from '../../api/pokemonapi';


export const fetchingAllPokemon = () =>{
    return {
        type:START_FETCHING_SINGLE_POKEMON
    }
}
export const fetchPokemon=(link) =>{
    return async (dispatch)=>{
        dispatch(fetchingAllPokemon());
        try{
            let {data} = await getPokemon(link);
            dispatch(successFetchingPokemon({data}))
            console.log(data)
        }catch(err){
            
        }
    }
}
export const successFetchingPokemon = ({data}) =>{
    return {
        type:SUCCESS_FETCHING_SINGLE_POKEMON,
        data,
    }
}