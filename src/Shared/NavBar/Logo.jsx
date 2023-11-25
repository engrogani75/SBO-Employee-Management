import { Typography } from '@material-tailwind/react';
import React from 'react';

const Logo = () => {
    return (
        <div className='flex flex-row  items-center justify-center  text-white text-center'>

   
             <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer font-extrabold text-white px-2"
        >
          <img src="sbo-high-resolution-logo.jpeg" alt="logo-ct" className="w-10" />
          SBO
        </Typography>
        </div>
    );
};

export default Logo;