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
import AdminRouter from "./AdminRouter";
import EmployeeRoute from "./EmployeeRoute";
import HrRoute from "./HrRoute";



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
          element: <HrRoute><EmployeeList></EmployeeList></HrRoute>
        },

        {
          path: 'details/:email',
          element: <Details></Details>,
        },

       

        {
          path: 'progress',
          element: <HrRoute><Progress></Progress></HrRoute>,
        },

        {
          path: 'payment-history',
          element: <EmployeeRoute><PaymentHistory></PaymentHistory></EmployeeRoute>
        },

        {
          path: 'work-sheet',
          element:<EmployeeRoute><WorkSheet></WorkSheet></EmployeeRoute>
        },

        {
          path: 'all-employee-list',
          element:<AdminRouter><AmdinEmployeeList></AmdinEmployeeList></AdminRouter>
        },



      ]
    }
  ]);