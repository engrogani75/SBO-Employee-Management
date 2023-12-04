
import { NavLink } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";


const NavList = () => {
 
  const [userRole] = useRole()

  const {user} = useAuth()



    return (
      <div>
        <ul className=" nav mt-2 mb-4 lg:text-2xl md:text-2xl flex  gap-2 md:gap-8 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-blue-800 font-bold">
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


{
            user && userRole === undefined  &&(
              <>
           <li>
            <NavLink
              to="/dashboard"
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
            user === null &&(
              <>
           <li>
            <NavLink
              to="/dashboard"
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
              to="/contact-us"
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