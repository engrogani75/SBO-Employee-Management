import React from 'react';

const EmployeeList = () => {
    return (
        <div>
          <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                Name
                </th>
                <th scope="col" className="px-6 py-3">
                Email
                </th>
                <th scope="col" className="px-6 py-3">
                - Verified
                </th>
                <th scope="col" className="px-6 py-3">
                Bank Account
                </th>
                <th scope="col" className="px-6 py-3">
                Salary
                </th>
                <th scope="col" className="px-6 py-3">
                Pay
                </th>
                <th scope="col" className="px-6 py-3">
                - Details
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                Name
                </td>
                <td className="px-6 py-4">
                Email

                </td>
                <td className="px-6 py-4">



{/* 
                <button
                  className={`btn ${employee.verified ? 'btn-success' : 'btn-danger'}`}
                  onClick={() => toggleVerification(index)}
                >
                  {employee.verified ? '✅' : '❌'}
                </button> */}



                <button>❌</button>
                </td>
                <td className="px-6 py-4">
                Bank Account

                </td>
                <td className="px-6 py-4">
                - Salary
                </td>
                <td className="px-6 py-4">
                Pay
                </td>
                <td className="px-6 py-4">
                <button>Show Details</button>
                </td>
            </tr>
         
     
        </tbody>
    </table>
</div>  
        </div>
    );
};

export default EmployeeList;