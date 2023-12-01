import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";
import useRole from "../Hooks/useRole";

const HrRoute = ({children}) => {

    const location = useLocation();
   const [userRole, loading] = useRole()


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


    if (userRole === 'HR') {
        return children;
    }



    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default HrRoute;