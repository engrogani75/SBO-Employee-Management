import { Typography } from "@material-tailwind/react";

const Footer = () => {
    return (
        <div>
            <footer className="w-full  p-8 bg-blue-gray-900">
      <div className="flex flex-row  items-center justify-center gap-y-6 gap-x-12 text-white text-center">
      <img src="sbo-high-resolution-logo.jpeg" alt="logo-ct" className="w-16" />
        <ul className="flex justify-center items-center gap-y-2 gap-x-8 ">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
        
          
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal text-white">
        &copy; 2023 SBO
      </Typography>
    </footer>
        </div>
    );
};

export default Footer;