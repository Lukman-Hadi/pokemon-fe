import * as React from 'react';

export default function Mypokemoncard({name,id, pokemonId,_onRemove,_onRename, status}) {
    return (
        <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-8 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-lg h-44 w-44" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`} alt="Bulbasaur"></img>
            </div>
            <div class="text-center">
                <p class="text-xl text-white font-bold mb-2">{name}</p>
                <button onClick={e=>_onRemove(id)} class="animate-wiggle w-full sm:w-auto px-7 py-2 mt-4 text-base font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded-full block  border-b border-indigo-300 bg-indigo-200 hover:bg-indigo-300 text-indigo-700">
                    Release
                </button>
                <button onClick={e=>_onRename(id)} class="animate-wiggle w-full sm:w-auto px-7 py-2 mt-4 text-base font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded-full block  border-b border-indigo-300 bg-indigo-200 hover:bg-indigo-300 text-indigo-700">
                    Rename
                </button>
            </div>
        </div>
    )
}