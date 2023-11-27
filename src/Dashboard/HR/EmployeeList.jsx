import React, { useState } from 'react';
import useUsers from '../../Hooks/useUsers';
import axios from 'axios';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

 


const EmployeeList = () => {


    const [users] = useUsers()
    const [open, setOpen] = useState(false);

    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [paymentData, setPaymentData] = useState({ month: '', year: '' });


    const verifiedHandle = (id) =>{
        const proced = confirm('are you sure confirm it')
  
        if (proced) {
            axios.patch(`http://localhost:5000/users/${id}`, {
                isVerfied: true
            })
            .then(res => {
                console.log('Data updated successfully:', res.data);
            })

            .catch(error => {
                console.error('Error updating data:', error);
              });
        }
    }

    const handleOpen = (employee) => {
        setSelectedEmployee(employee);
      setPaymentData({ month: '', year: '' });
        setOpen(true);
      };

      
  const handleClose = () => {
    setOpen(false);
  };

  const handlePayment = () => {
    // Perform the payment action, using selectedEmployee._id, paymentData.month, paymentData.year, etc.
    console.log('Payment processed:', selectedEmployee, paymentData);
    // Close the modal
    setOpen(false);
  };
 

   








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
                Designation
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
            {
                users.map(employee => <>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
               
               <td className="px-6 py-4">
               {employee.name}
               </td>
               <td className="px-6 py-4">
               {employee.email}

               </td>
              

               {
                employee?.isVerfied === true?<td className="px-6 py-4"><button className='bg-gray-800 p-1'>✅</button></td>: <>
                <td className="px-6 py-4"> <button className='bg-gray-800 p-1' onClick={() =>verifiedHandle(employee._id)}>❌</button> </td>
                </> 
               }

               <td className="px-6 py-4">
               { employee.bank_account_no}

               </td>
               <td className="px-6 py-4">
               { employee.designation}
               </td>
               <td className="px-6 py-4">
               { employee.salary}
               </td>
                {
                employee?.isVerfied === true?<>
                
                <td className="px-6 py-4"><button className='bg-gray-800 p-1'  onClick={() =>handleOpen(employee)}>Pay</button>
                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Pay {selectedEmployee?.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <p>Salary: {selectedEmployee?.salary}</p>

          <label>
              Month:
              <input
                type="text"
                value={paymentData.month}
                onChange={(e) => setPaymentData({ ...paymentData, month: e.target.value })}
              />
            </label>

            <label>
              Year:
              <input
                type="text"
                value={paymentData.year}
                onChange={(e) => setPaymentData({ ...paymentData, year: e.target.value })}
              />
            </label>
          </Typography>
          <Button onClick={handlePayment}>Pay</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
                
                
                </td>
                
                
                
                </> : <>
                <td className="px-6 py-4"> <button className='bg-gray-800 p-1' disabled="bg-white">Pay</button> </td>
                </> 
               }
               <td className="px-6 py-4">
               <button><Link to={`/dashboard/details/${employee._id}`}>Show Details</Link></button>
               </td>
           </tr>
                </>)
            }
         
     
        </tbody>
    </table>
</div>  
        </div>
    );
};

export default EmployeeList;