import { NavLink } from "react-router-dom";

const NavList = () => {


    return (
      <div>
        <ul className="mt-2 mb-4 flex  gap-2 md:gap-8 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-black font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
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