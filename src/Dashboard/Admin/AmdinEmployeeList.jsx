import useUsers from "../../Hooks/useUsers";


const AmdinEmployeeList = () => {

   
    const [users] = useUsers()

  


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
       <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">

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
            {users.map((employee) => (
              <tr key={employee.id} scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <td className="px-6 py-4">{employee.name}</td>
                <td className="px-6 py-4">{employee.designation}</td>
                <td className="px-6 py-4">
                  {!employee.isHR && (
                    <button>Make HR</button>
                  )}
                </td>
                <td className="px-6 py-4">
                  <button>Fire</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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