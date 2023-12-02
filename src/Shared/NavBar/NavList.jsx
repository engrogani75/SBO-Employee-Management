
import { NavLink } from "react-router-dom";
import useRole from "../../Hooks/useRole";


const NavList = () => {
 
  const [userRole, loading] = useRole()


 

    return (
      <div>
        <ul className="mt-2 mb-4  md:text-2xl flex  gap-2 md:gap-8 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-black font-bold">
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
            userRole === "" &&(
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