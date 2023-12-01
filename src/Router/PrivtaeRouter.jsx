import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { CirclesWithBar } from 'react-loader-spinner';

const PrivtaeRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading} = useContext(AuthContext);

    if(loading){
        return <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel='circles-with-bar-loading'
      />
    }

    if (user) {
        return children;
    }
   
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default PrivtaeRouter;