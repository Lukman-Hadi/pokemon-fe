import * as React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../api/auth';
import { useHistory, Link } from 'react-router-dom';
import { fetchAllPokemon } from '../../features/Pokemon/action';
import { userLogin } from '../../features/Auth/action';
import { useDispatch, useSelector } from "react-redux";
import { saveMyPokemon } from '../../features/Mypokemon/action';

const statuslist = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
}

export default function Login() {
    let [status, setStatus] = React.useState(statuslist.idle);
    let { handleSubmit, register } = useForm();
    const dispatch = useDispatch();
    let history = useHistory();
    const _onClick = (e) => {
        status === 'process' && e.preventDefault();
    }
    const onSubmit = async formData => {
        setStatus(statuslist.process);
        let { data } = await login(formData);
        // if (data.error) {
        //     let fields = Object.keys(data.fields);
        //     fields.forEach(field => alert(`${field} error, ${data.fields[field]?.properties?.message}`))
        //     setStatus(statuslist.error);
        //     return;
        // }
        if (data.error) {
            alert(data.message);
            setStatus(statuslist.error);
        } else {
            let { data:{pokemon, users} } = data;
            console.log({pokemon, users})
            dispatch(userLogin(users));
            dispatch(saveMyPokemon(pokemon))
            dispatch(fetchAllPokemon());
            setStatus(statuslist.idle);
            history.push('/home');
        }
    }
    return (
        <div class="flex items-center justify-center">
            <div className="bg-gray-800 flex flex-col w-80 sm:w-3/4 border border-gray-900 rounded-lg px-8 py-10">
                <div className="text-white mt-0">
                    <h1 className="font-bold text-4xl">Welcome Back</h1>
                    <p className="font-semibold">Login to your Pokecatch</p>
                </div>
                <form className="flex flex-col space-y-8 mt-10" onSubmit={handleSubmit(onSubmit)}>
                    <input ref={register} name="username" type="text" placeholder="Email" className="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" />
                    <input ref={register} name="password" type="password" placeholder="Password" className="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500" />
                    <button className="disabled:opacity-50 disabled:cursor-wait border bg-indigo-200 text-indigo-700 rounded-lg py-2 font-semibold" disabled={status === 'process'}>{status === 'process' ? 'Please Wait' : 'Login'}</button>
                </form>
                <p className="font-semibold text-white py-2 text-center">Doesn't have Account, why not create one !</p>
                <Link
                    to="/register"
                    className={`text-center border bg-indigo-200 text-indigo-700 rounded-lg py-2 font-semibold ${status === 'process' ? 'cursor-wait opacity-50' : ''}`}
                    role='button'
                    onClick={e => _onClick(e)}
                >{status === 'process' ? 'Please Wait' : "Register"}</Link>
            </div>
        </div>
    )
}