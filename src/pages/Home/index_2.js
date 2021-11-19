import * as React from 'react';
import Pokemoncard from '../../components/Pokemoncard';
import Botnav from '../../components/Botnav';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../../features/Pokemon/action';
import BounceLoader from 'react-spinners/BounceLoader';


export default function Home() {
    let pokemon = useSelector(state => state.allPokemon);
    let [list, setList] = React.useState([{status:'process',data:[]}])
    let dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    React.useEffect(() => {
        randomize();
    }, []);

    const randomize = () => {
        let _list = []
        for (let i = 0; i < 20; i++) {
            let index = Math.floor(Math.random() * pokemon.results.length);
            _list.push(pokemon.results[index]);
        }
        setList(_list);
    }

    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {list.status === "process" && !list.data.length ? (
                <div className="flex justify-center">
                  <BounceLoader color="red" />
                </div>
              ) : null}
            {list.length&& list.map((_pokemon, index) => {
                return (
                    < div key={index} >
                        <Pokemoncard name={_pokemon.name} />
                    </div>
                )
            })}
            <Botnav />
        </div >
    )
}