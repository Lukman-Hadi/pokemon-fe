import * as React from 'react';
import Pokemoncard from '../../components/Pokemoncard';
import Botnav from '../../components/Botnav';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPokemon } from '../../features/Pokemon/action';
import { fetchPokemon } from '../../features/SelectedPokemon/action';
import BounceLoader from 'react-spinners/BounceLoader';
import { getPokemon } from '../../api/pokemonapi';
import { useHistory } from 'react-router';
import List from '../../components/List';

export default function Pokemon() {
    let pokemon = useSelector(state => state.singlePokemon);
    let dispatch = useDispatch();
    let history = useHistory();
    return (
        <div className='grid'>
            {pokemon.status === "process" && !pokemon.results.length ? (
                <div className="flex justify-center">
                    <BounceLoader color="red" />
                </div>
            ) : null}
            <div className={`w-full bg-gray-900 rounded-lg sahdow-lg p-8 flex flex-col justify-center items-center ${pokemon.status === 'process'? 'hidden':''}`}>
                <div class="mb-8">
                    <img class="object-center object-cover rounded-lg h-44 w-44 md:h-60 md:w-60 lg:h-80 lg:w-80" src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.results.name}.png`} alt="Bulbasaur"></img>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">{pokemon.results.name}</p>
                    <p class="text-base text-gray-400 font-normal">Height: {pokemon.results.height}</p>
                    <p class="text-base text-gray-400 font-normal">Weight: {pokemon.results.weight}</p>
                    <button class="disabled:opacity-50 disabled:cursor-wait animate-wiggle w-full sm:w-auto px-7 py-2 mt-4 text-base font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded-full block  border-b border-indigo-300 bg-indigo-200 hover:bg-indigo-300 text-indigo-700" disabled={pokemon.status === 'process'}>
                        {pokemon.status === 'process' ? 'Please Wait' : 'Catch Pokemon'}
                    </button>
                </div>
                <p class="text-base text-gray-400 font-normal mt-5">This Pokomen Type is</p>
                <div class="flex flex-row flex-wrap justify-center">
                    {pokemon.results.types.length && pokemon.results.types.map((_pokemon, index) => {
                        return (
                            <div key={index} >
                                <List text={_pokemon.type.name} />
                            </div>
                        )
                    })}
                </div>
                <p class="text-base text-gray-400 font-normal mt-5">This Pokomen Move is</p>
                <div class="flex flex-row flex-wrap justify-center">
                    {pokemon.results.moves.length && pokemon.results.moves.map((_pokemon, index) => {
                        return (
                            <div key={index} >
                                <List text={_pokemon.move.name} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Botnav />
        </div >
    )
}