import * as React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../api/auth';
import { useHistory, Link } from 'react-router-dom';

const statuslist = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
}

export default function Register() {
    let [status, setStatus] = React.useState(statuslist.idle);
    let { handleSubmit } = useForm();
    let history = useHistory();
    const _onClick = (e) => {
        status === 'process' && e.preventDefault();
    }
    const onSubmit = async formData => {
        setStatus(statuslist.process);
        let { data } = await registerUser(formData);
        if (data.error) {
            let fields = Object.keys(data.fields);
            fields.forEach(field => alert(`${field} error, ${data.fields[field]?.properties?.message}`))
            setStatus(statuslist.error);
            return;
        }
        setStatus(statuslist.success);
        alert('Success, go to login page')
        history.push('/login');
    }
    return (
        <div class="flex items-center justify-center">
            <div className="bg-gray-800 flex flex-col w-80 sm:w-3/4 border border-gray-900 rounded-lg px-8 py-10">
                <div className="text-white mt-0">
                    <h1 className="font-bold text-4xl">Welcome</h1>
                    <p className="font-semibold">Let's create your Pokecatch account!</p>
                </div>
                <form className="flex flex-col space-y-8 mt-10" onSubmit={handleSubmit(onSubmit)}>
                    <input name="full_name" type="text" placeholder="Full Name" className="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500"></input>
                    <input name="email" type="text" placeholder="Email" className="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500"></input>
                    <input name="password" type="password" placeholder="Password" className="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500"></input>
                    <button className="disabled:opacity-50 disabled:cursor-wait border bg-indigo-200 text-indigo-700 rounded-lg py-2 font-semibold" disabled={status === 'process'}>{status === 'process' ? 'Please Wait' : 'Register'}</button>
                </form>
                <p className="font-semibold text-white py-2 text-center">Or login if you have one</p>
                <Link
                    to="/login"
                    className={`text-center border bg-indigo-200 text-indigo-700 rounded-lg py-2 font-semibold ${status === 'process' ? 'cursor-wait opacity-50' : ''}`}
                    role='button'
                    onClick={e => _onClick(e)}
                >{status === 'process' ? 'Please Wait' : "Login"}</Link>
            </div>
        </div>
    )
}