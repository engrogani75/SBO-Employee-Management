import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";



const useRole = () => {

    const {user} = useAuth()
    const [userRole, setUserRole] = useState('')
    const [loading, setLoading] = useState(true)
 

    useEffect(() =>{

        axios.get(`http://localhost:5000/users/${user?.email}`) 
        .then(res => {
         const result = res?.data
         setUserRole(result[0].role)
         setLoading(false)
        })
     }, [user.email])

     return [userRole, loading]
};

export default useRole;