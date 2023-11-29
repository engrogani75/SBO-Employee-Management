import axios from "axios";
import { useEffect, useState } from "react";

const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/payments')
        .then(res =>{
            const data = res.data;
            setPaymentHistory(data)

        })
    },[])


    return (
          <div>
        <h2>Salary Payment History</h2>
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Month</th>
              <th scope="col" className="px-6 py-3">Amount</th>
              <th scope="col" className="px-6 py-3">Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment) => (
              <tr key={payment._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{payment.Month}</td>
                <td className="px-6 py-4">{payment.salary}</td>
                <td className="px-6 py-4">{payment.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default PaymentHistory;