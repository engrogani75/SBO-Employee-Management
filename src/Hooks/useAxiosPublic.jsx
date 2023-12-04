import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://sbo-employee-management-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;