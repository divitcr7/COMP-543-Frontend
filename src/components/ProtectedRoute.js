import React from 'react';
import Cookies from 'js-cookie';
import {Navigate, useLocation} from 'react-router-dom';
import {isLoggedIn} from './auth';

const ProtectedRoute = ({children}) => {
    const location = useLocation();

    if (!isLoggedIn() || Cookies.get('user') === 'guest') {
        // Redirect them to the / page, but save the current location they were trying to go to
        return <Navigate to="/" state={{from: location}} replace/>;
    }

    return children;
};

export default ProtectedRoute;
