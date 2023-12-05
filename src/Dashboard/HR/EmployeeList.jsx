import React, { useContext, useEffect, useState } from 'react';
import useUsers from '../../Hooks/useUsers';
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ChekoutForm from './ChekoutForm';
import { AuthContext } from '../../Provider/AuthProvider';
import useRole from '../../Hooks/useRole';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

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


    const [users, refetch] = useUsers()
    const [open, setOpen] = useState(false);
    const axiosSecure = useAxiosSecure()

    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [paymentData, setPaymentData] = useState({ month: '', year: '' });

    
  // for testing purpose

  
    // const [userRole] = useRole();

    // console.log(userRole);


    const verifiedHandle = (id) =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make verified!"
    })

    .then(result => {
      if (result.isConfirmed){
        axiosSecure.patch(`/users/${id}`, {
          isVerfied: true
      })
      .then(res => {
             
        if (res.data.modifiedCount>0) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Varified.',
            showConfirmButton: false,
            timer: 1500
        });
        refetch()
        }


    })

    .catch(error => {
      console.error('Error updating data:', error);
    });


      }
    })
  
       
    }

    const handleOpen = (employee) => {
        setSelectedEmployee(employee);
      setPaymentData({ month: '', year: '' });
        setOpen(true);
      };

      
  const handleClose = () => {
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

          <label className='ml-1'>
              Month:
              <input
                type="text"
                className='border my-2 ml-1'
                value={paymentData.month}
                onChange={(e) => setPaymentData({ ...paymentData, month: e.target.value })}
              />
            </label>

            <label className='ml-2'>
              Year:
              <input
                type="text"
                className='border-2 my-2 ml-1'
                value={paymentData.year}
                onChange={(e) => setPaymentData({ ...paymentData, year: e.target.value })}
              />
            </label>
          </Typography>

          {/* for Strip */}

          <Elements stripe={stripePromise}>
                  <ChekoutForm selectedEmployee={selectedEmployee} paymentData={paymentData} ></ChekoutForm>
                </Elements>

        </Box>
      </Modal>
                
                
                </td>
                
                
                
                </> : <>
                <td className="px-6 py-4"> <button className='bg-gray-800 p-1' disabled="bg-white">Pay</button> </td>
                </> 
               }
               <td className="px-6 py-4">
               <button><Link to={`/dashboard/details/${employee.email}`}>Show Details</Link></button>
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