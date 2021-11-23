import * as React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';
import { userLogout } from '../../features/Auth/action';

export default function Logout() {

    let history = useHistory();
    let dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(userLogout());
    }, [history]);

    return (
        <div className="text-center flex flex-col justify-center items-center">
            <BounceLoader color="red" />
            <br />
            Logging out ...
            <Redirect to="/login" />
        </div>
    )
}