import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Chart from 'chart.js/auto';


const Details = () => {

    const { email } = useParams();
    const [data, setData] = useState([])
   console.log(data);

   useEffect(() =>{
    axios.get(`http://localhost:5000/payments/${email}`)
    .then(res => {
   setData(res?.data)
   renderChart(res?.data)
    })
   },[email])


   const renderChart = (paymentData) => {
    
    // Extract relevant data for the chart (modify as per your data structure)
    const months = paymentData.map(payment => payment.Month);
    const year = paymentData.map(payment => payment.Year);
    const amounts = paymentData.map(payment => payment.salary);

    // Get the chart canvas element
    const chartCanvas = document.getElementById('paymentChart');

    // Create the bar chart
    new Chart(chartCanvas, {
        type: 'bar',
        data: {
            labels: months, year,
            datasets: [{
                label: 'Payment Amount',
                data: amounts,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
};



    return (

      
        <div className="flex justify-center item-center">
           <div className="flex justify-center item-cneter flex-col">
           <h1 className="text-3xl">Welcome</h1>
          
           <p className="text-2xl">{data[0]?.name}</p>
            <p className="mt-2">{data[0]?.email}</p>
            <p className="mt-2">{data[0]?.designation}</p>
            <img src={data[0]?.photo} className="w-20 h-20 mt-2 rounded-full" alt="" />
            <canvas id="paymentChart" width="400" height="200"></canvas>
           </div>

        </div>
    );
};

export default Details;