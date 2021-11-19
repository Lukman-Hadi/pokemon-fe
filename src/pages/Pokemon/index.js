import * as React from 'react';
import Pokemoncard from '../../components/Pokemoncard';
import Botnav from '../../components/Botnav';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPokemon } from '../../features/Pokemon/action';
import { fetchPokemon } from '../../features/SelectedPokemon/action';
import BounceLoader from 'react-spinners/BounceLoader';
import { getPokemon } from '../../api/pokemonapi';
import { useHistory } from 'react-router';

export default function Pokemon() {
    let pokemon = useSelector(state => state.singlePokemon);
    let dispatch = useDispatch();
    let history = useHistory();
    return (
        <div className='grid'>
            {/* {_pokemon.status === "process" && !_pokemon.results.length ? (
                <div className="flex justify-center">
                    <BounceLoader color="red" />
                </div>
            ) : null} */}
            <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-8 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-lg h-44 w-44" src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.results.name}.png`} alt="Bulbasaur"></img>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">{pokemon.results.name}</p>
                    <p class="text-base text-gray-400 font-normal">Software Engineer</p>
                    <button class="animate-wiggle w-full sm:w-auto px-7 py-2 mt-4 text-base font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded-full block  border-b border-indigo-300 bg-indigo-200 hover:bg-indigo-300 text-indigo-700">
                        Catch Pokemon
                    </button>
                </div>
            </div>
            <Botnav />
        </div >
    )
}