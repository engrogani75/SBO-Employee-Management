import React from "react";
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

  
import Profile from "./Profile";
import NavList from "./NavList";
import Logo from "./Logo";




const Nav = () => {

  

    return (
        <div className="grid h-24  bg-white shadow-2xl grid-cols-12 bg-transparent mx-auto justify-center items-center md:fixed z-50 w-full">
          <div className="col-span-3">
          <Logo></Logo>
          </div>
          <div className="col-span-6 flex justify-center items-center">
          <NavList></NavList>
          </div>
          <div className="col-span-3">
          <Profile></Profile>
          </div>
        </div>
    );
};

export default Nav;