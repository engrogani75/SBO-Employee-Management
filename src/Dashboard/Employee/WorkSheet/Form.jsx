import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from "../../../Provider/AuthProvider";
import moment from 'moment';

const Form = ({ addWork }) => {

  const { user} = useContext(AuthContext);
  const [task, setTask] = useState('');
const [hours, setHours] = useState('');
const [date, setDate] = useState('');

const handleSubmit = () => {
  // Validate form inputs
  if (!task || !hours || !date) {
    alert('Please fill in all fields.');
    return;
  }



const dateString = (date); // replace this with your date string
const dateObject = new Date(dateString);
const month = dateObject.getMonth() + 1; // Adding 1 because getMonth() returns values from 0 to 11

const monthString = moment(dateString).format('MMM');

console.log(monthString);



  // Create a new work entry
  const newWork = {
    task,
    hours: parseInt(hours, 10),
    date,
    name: user?.displayName,
    email: user?.email,
    month: monthString, 
  };

  // Add the new work entry to the table
  addWork(newWork);

  axios.post('http://localhost:5000/work-sheet', newWork)
  .then(res => {
      console.log(res.data);
      setTask('');
      setHours('');
      setDate('');
  })
 

  

  // Clear the form fields
 
};



    return (
      <div className='my-4 flex justify-evenly'>
          {/* <h1 className='my-4 text-2xl font-bold uppercase text-center'>Pls add yor work</h1> */}
      <label>
        Tasks:
        <select value={task} onChange={(e) => setTask(e.target.value)} className='mx-3 border-2 border-gray-400 py-1 '>
          <option value="Sales">Sales</option>
          <option value="Support">Support</option>
          <option value="Content">Content</option>
          <option value="Paper-work">Paper-work</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Hours Worked:
        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} className='mx-3 border-2 border-gray-400' />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className='mx-3 border-2 border-gray-400' />
      </label>
      <button onClick={handleSubmit} className='text-center bg-orange-500 p-1 border-2 rounded-xl font-bold' type='submit'>Add </button>
    </div>
    );
};

export default Form;