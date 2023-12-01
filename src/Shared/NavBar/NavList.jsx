import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const NavList = () => {
  const {user} = useContext(AuthContext)
  const [userRole, setUserRole] = useState("")


    useEffect(() =>{

      axios.get(`http://localhost:5000/users/${user?.email}`) 
      .then(res => {
       const result = res?.data
       setUserRole(result[0].role)
      })
   }, [user])


 


    return (
      <div>
        <ul className="mt-2 mb-4 flex  gap-2 md:gap-8 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-black font-bold">
          {
            userRole === "HR" &&(
              <>
           <li>
            <NavLink
              to="/dashboard/employee-list"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
              </>
            )
         }

{
            userRole === "Employee" &&(
              <>
           <li>
            <NavLink
              to="/dashboard/work-sheet"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
              </>
            )
         }


{
            userRole === "Admin" &&(
              <>
           <li>
            <NavLink
              to="/dashboard/all-employee-list"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
              </>
            )
         } 
          

          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
             Condact us
            </NavLink>
          </li>
        </ul>
      </div>
    );
};

export default NavList;