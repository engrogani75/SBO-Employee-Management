import { useState } from "react";
import useUsers from "../../Hooks/useUsers";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { IoIosSwitch } from "react-icons/io";

const AmdinEmployeeList = () => {

    const [users, refetch] = useUsers()
    const axiosSecure  = useAxiosSecure()
    const [isTableView, setIsTableView] = useState(true);

    const userFilter = users.filter(verfiyUser => verfiyUser.isVerfied === true) 

   
  const firedHandle = (id) =>{
   axiosSecure.patch(`/users/admin/${id}`)
   .then(res => {
    refetch()
    console.log(res.data);
   })
  }

  const makeHrHandle = (id) =>{
    axiosSecure.put(`/users/mkhr/${id}`)
   .then(res => {
    refetch()
    console.log(res.data);
   })
  }

  const toggleView = () => {
    setIsTableView((prev) => !prev);
  };



  


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
       <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
       <button onClick={toggleView} className="bg-blue-800 p-2 text-white font-bold flex">
       <IoIosSwitch /> {isTableView ? "Switch to Card View" : "Switch to Table View"}
        </button>

       {
        isTableView? <>
         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Designation</th>
              <th scope="col" className="px-6 py-3">Make HR</th>
              <th scope="col" className="px-6 py-3">Fire</th>
            </tr>
          </thead>
          <tbody>
            {userFilter.map((employee) => (
              <tr key={employee.id} scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <td className="px-6 py-4">{employee.name}</td>
                <td className="px-6 py-4">{employee.designation}</td>
                <td className="px-6 py-4">
               
                  {
                    employee.role === 'HR' || employee.role === 'Admin'? 
                    <><button disabled className="bg-green-600 p-2 border-2 rounded-xl">{employee.role}</button></>:<>
                    <button onClick={() => makeHrHandle(employee._id)}>Make HR</button></>
                  }


                </td>
                <td className="px-6 py-4">
                  {
                    employee.status === 'Fired'? <><button>Fired</button></>:
                    <><button className="bg-red-600 p-2 border-2 rounded-xl text-white" onClick={() =>firedHandle(employee._id)}>Fire</button></>
                  }
                  {/*  */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        </>: <>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {userFilter.map((employee) => (
           <div
           key={employee.id}
           className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800"
         >
           <p className="text-xl font-semibold mb-2">{employee.name}</p>
           <p className="text-gray-600">{employee.designation}</p>
           {/* ... other card content */}
           <div className="mt-4 flex justify-center gap-3">

           {
                    employee.role === 'HR' || employee.role === 'Admin'? 
                    <><button disabled className="bg-green-600 p-2 border-2 rounded-xl">{employee.role}</button></>:<>
                    <button onClick={() => makeHrHandle(employee._id)} className="bg-blue-800 text-white p-2 rounded-lg">Make HR</button></>
                  }

                    {
                    employee.status === 'Fired'? <><button>Fired</button></>:
                    <><button className="bg-red-600 p-2 border-2 rounded-xl text-white" onClick={() =>firedHandle(employee._id)}>Fire</button></>
                  }


           
           </div>
         </div>
        ))}

      
          
        </div>
        
        
        </>
       }
        {/* {isModalOpen && (
          <Modal
            employeeName={selectedEmployee ? users.find((e) => e.id === selectedEmployee).name : ''}
            onConfirm={handleConfirmation}
            onCancel={() => setModalOpen(false)}
          />
        )} */}
    
</div>
      </div>
    );
};

export default AmdinEmployeeList;