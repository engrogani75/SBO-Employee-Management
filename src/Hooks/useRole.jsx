import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useRole = () => {

    const {user} = useAuth()
    const [userRole, setUserRole] = useState('')
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure()
 

    useEffect(() =>{

        axiosSecure.get(`/users/${user?.email}`) 
        .then(res => {
         const result = res?.data
         setUserRole(result[0].role)
         setLoading(false)
        })
     }, [axiosSecure, user])

     return [userRole, loading]
};

export default useRole;