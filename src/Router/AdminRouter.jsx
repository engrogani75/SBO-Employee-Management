import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";


const AdminRouter = ({children}) => {

    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    const [userRole, setUserRole] = useState([])
    const location = useLocation();

    useEffect(() =>{

        axios.get(`http://localhost:5000/users/${user?.email}`) 
        .then(res => {
         const result = res?.data
         setUserRole(result[0].role)
         setLoading(false)
        })
     }, [user.email])

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


    if (userRole === 'Admin') {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRouter;