import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useWorksheet = () => {

    const {refetch, data: worksheet=[]} = useQuery({
        queryKey: ['worksheet'],
        queryFn: async () =>{
            const res = await axios.get('http://localhost:5000/work-sheet')
            return res.data
        }
    
       })

       return [worksheet, refetch]
   
};

export default useWorksheet;