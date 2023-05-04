import React, { Children, useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Spiner from '../Share/Spiner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading)
    {
        return <Spiner />
    }

    if(user)
    {
        return children
    }
    return (
        <Navigate to="/login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;