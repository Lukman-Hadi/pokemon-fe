import { fetchPokemon } from "../../api/mypokemon";
import { FETCH_MY_POKEMON,SAVE_MY_POKEMON } from "./constant";

export function fetchMyPokemon(id) {
    // let { data: { data } } = await fetchPokemon(id);
    // return {
    //     type: FETCH_MY_POKEMON,
    //     data
    // }
    return async(dispatch)=>{
        let {data:{data}} = await fetchPokemon(id);
        dispatch(saveMyPokemon(data));
    }
}

// export const fetchAllPokemon=() =>{
//     return async (dispatch)=>{
//         dispatch(fetchingAllPokemon());
//         try{
//             let {data:{results,count}} = await getAllPokemon();
//             dispatch(successFetchingAllPokemon({results,count}))
//         }catch(err){
//             dispatch(failedFetchALlPokemon());
//         }
//     }
// }
export function saveMyPokemon(pokemon) {
    return {
        type: SAVE_MY_POKEMON,
        pokemon
    }
}
