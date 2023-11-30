import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";
import PrivtaeRouter from "./PrivtaeRouter";
import Dashboard from "../Dashboard/Dashboard";
import EmployeeList from "../Dashboard/HR/EmployeeList";
import Details from "../Dashboard/HR/Details";
import PaymentHistory from "../Dashboard/Employee/PaymentHistory/PaymentHistory";
import WorkSheet from "../Dashboard/Employee/WorkSheet/WorkSheet";
import Progress from "../Dashboard/HR/Progress";
import AmdinEmployeeList from "../Dashboard/Admin/AmdinEmployeeList";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
         element: <Home></Home>,
        },

        {
          path: "/login",
         element: <Login></Login>,
        },

        {
          path: "/signUp",
         element: <Registation></Registation>,
        },
      ]
    },


    {
      path: 'dashboard',
      element: <PrivtaeRouter><Dashboard></Dashboard></PrivtaeRouter>,
      children: [
        {
          path: 'employee-list',
          element: <EmployeeList></EmployeeList>,
        },

        {
          path: 'details/:email',
          element: <Details></Details>,
        },

        {
          path: 'details/:email',
          element: <Details></Details>,
        },

        {
          path: 'progress',
          element: <Progress></Progress>,
        },

        {
          path: 'payment-history',
          element: <PaymentHistory></PaymentHistory>,
        },

        {
          path: 'work-sheet',
          element: <WorkSheet></WorkSheet>,
        },

        {
          path: 'all-employee-list',
          element: <AmdinEmployeeList></AmdinEmployeeList>,
        },



      ]
    }
  ]);