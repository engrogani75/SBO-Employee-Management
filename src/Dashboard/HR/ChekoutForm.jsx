import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ChekoutForm = ({selectedEmployee, paymentData}) => {
    const axiosSecure = useAxiosSecure()

    const {_id, name, email, photo, bank_account_no, salary, designation, role, } = selectedEmployee;
    const{year, month} = paymentData;
    const { user} = useContext(AuthContext);

    
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    useEffect(() =>{
        axiosSecure.post('/create-payment-intent', {salary: salary})
        .then(res =>{
        
            setClientSecret(res.data.clientSecret);
        })
    }, [salary, axiosSecure])
    
const handleSubmit = async (event) =>{
   
    event.preventDefault();

    if (!stripe || !elements) {
        return
    }

    const card = elements.getElement(CardElement)

    if (card === null) {
        return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if (error) {
        // console.log('payment error', error);
        setError(error.message);
    }

    else {
        // console.log('payment method', paymentMethod)
        setError('');
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {

        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
            }
        }
    })

    if (confirmError) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Payment has been not completed",
            showConfirmButton: false,
            timer: 1500
        });
    }

    else{
        // console.log('payment intent', paymentIntent)
        if (paymentIntent.status === 'succeeded') {
            // console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id);
        }

        // now save the payment in the database
        const payment = {
            payMentBy: user.email,
            name: name,
            photo: photo,
            email: email,
            designation: designation,
            salary: salary,
            transactionId: paymentIntent.id,
            Month: month,
            Year: year,
            role: role
        }

        const res = await axios.post('https://sbo-employee-management-server.vercel.app/payments', payment);
        // console.log('payment saved', res.data);
        navigate('/dashboard/employee-list')

        if (res.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Payment has been completed",
                showConfirmButton: false,
                timer: 1500
            });

            
        }

        // insertedId


    }


}


    return (
        <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret} >
            Pay
        </button>
        <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
    </form>
    );
};

export default ChekoutForm;