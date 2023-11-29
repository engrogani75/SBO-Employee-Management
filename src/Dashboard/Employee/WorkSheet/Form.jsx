import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

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
    
        // Create a new work entry
        const newWork = {
          task,
          hours: parseInt(hours, 10),
          date,
          name: user?.displayName,
          email:user?.email
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
    <div>
        <h1 className='text-center text-2xl font-bold uppercase my-2'>Pls submit your task</h1>
     <div className='my-5 flex justify-center items-center gap-10 border-4 border-dotted'>
      <label>
        Tasks:
        <select value={task} onChange={(e) => setTask(e.target.value)} className='border-2 border-blue-gray-900 ml-4'>
          <option value="Sales">Sales</option>
          <option value="Support">Support</option>
          <option value="Content">Content</option>
          <option value="Paper-work">Paper-work</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Hours Worked:
        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} className='border-2 border-blue-gray-900 ml-4' />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}  className='border-2 border-blue-gray-900 ml-4' />
      </label>
      <button onClick={handleSubmit} className='bg-green-700 px-2 py-1 text-white rounded-full' type='submit'>Add </button>
    </div>
        </div>
    );
};

export default Form;