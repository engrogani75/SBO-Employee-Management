import React, { useContext } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
  } from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
  } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";




const Profile = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {

    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}

      const [isMenuOpen, setIsMenuOpen] = React.useState(false);

      const closeMenu = () => setIsMenuOpen(false);

    return (
        <div>
     <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
   
      <MenuHandler>
   
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={user?.photoURL}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>

       
      </MenuHandler>
      <MenuList className="p-1 bg-transparent border-none text-xl font-bold flex flex-col justify-end items-end text-deep-orange-600">
      
        
    <div className="mt-2">
    {
            user ? <>
              <div className="mt-2"><span className="mr-2">{user?.displayName}</span></div>
                 <button onClick={handleLogOut} className="btn btn-ghost bg-transparent">LogOut</button>
            </> : <>
                <li className="list-none"><Link to="/login">Login</Link></li>
            </>
        }
    </div>

        
      </MenuList>
    </Menu>
        </div>
    );
};

export default Profile;
