import axios from "axios";



const axiosSecure = axios.create({
    baseURL: 'https://sbo-employee-management-server.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;