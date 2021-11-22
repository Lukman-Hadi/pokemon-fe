import * as React from 'react';
import Botnav from '../../components/Botnav';
import { useDispatch, useSelector } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';
import { useHistory } from 'react-router';
import List from '../../components/List';
import { catchPokemon, savePokemon } from '../../api/mypokemon';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { fetchPokemon } from '../../api/mypokemon';
import { fetchMyPokemon, saveMyPokemon } from '../../features/Mypokemon/action';


export default function Pokemon() {
    const MySwal = withReactContent(Swal)
    let pokemon = useSelector(state => state.singlePokemon);
    let user = useSelector(state => state.auth.user);
    let dispatch = useDispatch();

    const handleClick = async (id) => {
        let { data } = await catchPokemon();
        if (!data.can) {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: data.message,
                confirmButtonText: 'Try Again'
            })
        } else {
            MySwal.fire({
                icon: 'success',
                title: 'Yaay!',
                text: data.message,
                showCancelButton: true,
                confirmButtonText: 'Save to your pocket',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    MySwal.fire({
                        title: 'Enter your pokemon name',
                        input: 'text',
                        inputAttributes: {
                            autocapitalize: 'off'
                        },
                        showCancelButton: true,
                        confirmButtonText: 'Save',
                        showLoaderOnConfirm: true,
                        preConfirm: async (name) => {
                            //
                            let payload = { pokemon_id: id, user_id: user.id, name };
                            console.log('payload', payload);
                            let { data } = await savePokemon(payload);
                            return data;
                        },
                        allowOutsideClick: () => !MySwal.isLoading()
                    }).then(async ({value}) => {
                        if (!value.error) {
                            MySwal.fire({
                                title: `${value.message}`,
                                icon: 'success',
                            })
                        }else{
                            MySwal.fire({
                                title: `${value.message}`,
                                icon: 'error',
                            })
                        }
                        dispatch(fetchMyPokemon(user.id));
                    })
                }
            })
        }
    }

    return (
        <div className='grid'>
            {pokemon.status === "process" && !pokemon.results.length ? (
                <div className="flex justify-center">
                    <BounceLoader color="red" />
                </div>
            ) : null}
            <div className={`w-full bg-gray-900 rounded-lg sahdow-lg p-8 flex flex-col justify-center items-center ${pokemon.status === 'process' ? 'hidden' : ''}`}>
                <div class="mb-8">
                    <img class="object-center object-cover rounded-lg h-44 w-44 md:h-60 md:w-60 lg:h-80 lg:w-80" src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.results.name}.png`} alt="Bulbasaur"></img>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">{pokemon.results.name}</p>
                    <p class="text-base text-gray-400 font-normal">Height: {pokemon.results.height}</p>
                    <p class="text-base text-gray-400 font-normal">Weight: {pokemon.results.weight}</p>
                    <button onClick={e => handleClick(pokemon.results.id)} class="disabled:opacity-50 disabled:cursor-wait animate-wiggle w-full sm:w-auto px-7 py-2 mt-4 text-base font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded-full block  border-b border-indigo-300 bg-indigo-200 hover:bg-indigo-300 text-indigo-700" disabled={pokemon.status === 'process'}>
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