import * as React from 'react';
import Pokemoncard from '../../components/Pokemoncard';
import Botnav from '../../components/Botnav';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPokemon } from '../../features/Pokemon/action';
import { fetchPokemon, successFetchingPokemon } from '../../features/SelectedPokemon/action';
import BounceLoader from 'react-spinners/BounceLoader';
import { getPokemon } from '../../api/pokemonapi';
import { useHistory } from 'react-router';


export default function Home() {
    let pokemon = useSelector(state => state.allPokemon);
    let [list, setList] = React.useState({status:'process',data:[]})
    let dispatch = useDispatch();
    let history = useHistory();
    let [refresh,setRefresh] = React.useState(false)
    React.useEffect(() => {
        randomize();
    },[refresh]);

    const onClickButton =(poke) =>{ 
        console.log(poke)
        dispatch(successFetchingPokemon({data:poke}));
        history.push('/pokemon');
    }

    const randomize = async () => {
        let _list = []
        if(pokemon.results.length>1){
            // for (let i = 0; i < 20; i++) {
            //     let index = Math.floor(Math.random() * pokemon.results.length);
            //     _list.push(pokemon.results[index]);
            // }
            for(let i =0;i<20;i++){
                let index = Math.floor(Math.random() * pokemon.results.length);
                let {data} = await getPokemon(pokemon.results[index].url);
                // console.log(data);
                _list.push(data);
            }
            setList({status:'success',data:_list});    
        }
    }
    const onRefresh=()=>{
        setRefresh(!refresh);
    }

    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {/* {list.status === "process"? (
                <div className="flex justify-center">
                  <BounceLoader color="red" />
                </div>
              ) : null} */}
            {list.status === "success"&& list.data.map((_pokemon, index) => {
                return (
                    < div key={index} > 
                        <Pokemoncard poke={_pokemon} _onClick={onClickButton}/>
                    </div>
                )
            })}
            <Botnav home={true} _onRefresh={onRefresh}/>
        </div >
    )
}
