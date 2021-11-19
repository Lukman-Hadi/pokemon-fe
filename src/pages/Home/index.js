import * as React from 'react';
import Pokemoncard from '../../components/Pokemoncard';
import Botnav from '../../components/Botnav';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPokemon } from '../../features/Pokemon/action';
import { fetchPokemon } from '../../features/SelectedPokemon/action';
import BounceLoader from 'react-spinners/BounceLoader';
import { getPokemon } from '../../api/pokemonapi';
import { useHistory } from 'react-router';


export default function Home() {
    let pokemon = useSelector(state => state.allPokemon);
    let dispatch = useDispatch();
    let history = useHistory();
    React.useEffect(() => {
        dispatch(fetchAllPokemon());
    }, [dispatch]);

    const onClickButton =(e) =>{ 
        console.log(e)
        dispatch(fetchPokemon(e));
        history.push('/pokemon');
    }

    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {pokemon.status === "process" && !pokemon.results.length ? (
                <div className="flex justify-center">
                    <BounceLoader color="red" />
                </div>
            ) : null}
            {pokemon.results.length && pokemon.results.map((_pokemon, index) => {
                return (
                    <div key={index} >
                        <Pokemoncard name={_pokemon.name} url={_pokemon.url} _onClick = {onClickButton}/>
                    </div>
                )
            })}
            <Botnav />
        </div >
    )
}