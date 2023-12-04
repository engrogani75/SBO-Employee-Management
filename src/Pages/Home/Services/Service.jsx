import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";


const Service = () => {

    const [service, setService] = useState([])

    useEffect(() =>{
        fetch('service.json')
        .then(res =>res.json())
        .then(data =>setService(data))
    },[])




    return (
        <div className="my-6 ">
            <h1 className="text-3xl font-bold text-center text-blue-800 my-6">Our Service</h1>
          
           <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center items-center">
           {
                service.map(item => <ServiceCard key={item.index} item = {item}></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default Service;