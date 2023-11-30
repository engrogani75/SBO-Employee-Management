import { useState, useEffect } from 'react';
import useUsers from '../../Hooks/useUsers';
import useWorksheet from '../../Hooks/useWorksheet';

const Progress = () => {

    const [users] = useUsers()
    const [worksheet, refetch] = useWorksheet()
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');



    useEffect(() => {
        // Refetch worksheet data when filters change
        refetch();
      }, [refetch]);
    
      // const filtername = worksheet.filter(item => item.name === selectedEmployee || item.month === selectedMonth)
      // console.log(filtername);
    
      const filteredWorksheet = worksheet.filter((workItem) =>
        (selectedEmployee === '' || workItem.name.toLowerCase() === selectedEmployee.toLowerCase()) &&
        (selectedMonth === '' || workItem.month.toLowerCase() === selectedMonth.toLowerCase())
      );
     
    console.log(filteredWorksheet);



    return (
          <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
         
        <div>
          <label htmlFor="employee" className="mr-2">Select Employee:</label>
          <select
            id="employee"
            value={selectedEmployee}
            onChange={(e) => {
              setSelectedEmployee(e.target.value);
            
            }}
          >
            <option value="">All Employees</option>

            {
              users.map(employee =>  <option value={employee.name} key={employee._id}>{employee.name}</option>)
            }
       
           
          </select>
        </div>

        <div>
          <label htmlFor="month" className="mr-2">Select Month:</label>
          <select
            id="month"
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(e.target.value);
          
            }}
          >
            <option value="">All Months</option>
            {/* Add options for each month */}
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="July">July</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>
        </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            
              <th scope="col" className="px-6 py-3">
              TASK
              </th>
              <th scope="col" className="px-6 py-3">
              HOURS WORKED
              </th>
              <th scope="col" className="px-6 py-3">
              DATE
              </th>
              
            </tr>
          </thead>

          
          <tbody>
           {
            filteredWorksheet.map(workItem => <> <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {workItem.task}
            </th>
            <td className="px-6 py-4"> {workItem.hours}</td>    
            <td className="px-6 py-4"> {workItem.month}</td>  
          </tr>
          </>)
           }

          
           
            
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Progress;