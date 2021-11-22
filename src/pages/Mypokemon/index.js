import * as React from 'react';
import Botnav from '../../components/Botnav';
import { useDispatch, useSelector } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';
import Mypokemoncard from '../../components/Mypokemoncard';
import { fetchMyPokemon } from '../../features/Mypokemon/action';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { deletePokemon, releasePokemon, renamePokemon } from '../../api/mypokemon';


export default function Mypokemon() {
    let pokemon = useSelector(state => state.myPokemon.pokemon);
    let user = useSelector(state => state.auth.user)
    let [status, setStatus] = React.useState('idle')
    let dispatch = useDispatch();
    const MySwal = withReactContent(Swal)
    // React.useEffect(() => {
    //     dispatch(fetchAllPokemon());
    // }, [dispatch]);
    React.useEffect(() => {
        dispatch(fetchMyPokemon(user.id));
    }, [status]);

    const onClickButtonRemove = async (id) => {
        let { data: { can, message } } = await releasePokemon();
        if (!can.isOk) {
            MySwal.fire({
                title: message,
                text: can.num,
                icon: 'error',
            })
        } else {
            setStatus('process')
            MySwal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, release it!',
                preConfirm: async () => {
                    let data = await deletePokemon(id);
                    return data
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    MySwal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    setStatus('idle')
                }
            })
        }
    }
    const onClickButtonRename = async (id) => {
        setStatus('process')
        MySwal.fire({
            title: 'Enter new name',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            showLoaderOnConfirm: true,
            preConfirm: async (name) => {
                let payload = { name };
                let { data } = await renamePokemon(id, payload);
                return data;
            },
        }).then((result) => {
            if (result.isConfirmed) {
                MySwal.fire({
                    title: 'Success',
                    text: `your pokemon renamed to ${result.value.name}`,
                    icon: 'success'
                }
                )
                setStatus('idle')
            }
        })
    }
    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {!pokemon ? (
                <div className="flex justify-center">
                    <BounceLoader color="red" />
                </div>
            ) : null}
            {pokemon && pokemon.map((_pokemon, index) => {
                return (
                    < div key={index} >
                        <Mypokemoncard name={_pokemon.name} id={_pokemon.id} pokemonId={_pokemon.pokemon_id} _onRemove={onClickButtonRemove} _onRename={onClickButtonRename} />
                    </div>
                )
            })}
            <Botnav />
        </div >
    )
}
