import { Link } from 'react-router-dom';
import './about.css';
import { FaFacebook, FaGooglePlusSquare, FaLinkedin, FaTelegram, FaWhatsappSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const About = () => {
    return (
        <div className='flex justify-center items-center flex-col my-5 about'>
            <h1 className='text-center my-4 text-3xl text-blue-800 font-bold'>About us</h1>
         
                <p className='text-blue-800 text-xl text-center my-5'>We are every where. <br /> 
                We have completed the about 100000 Project. <br /> Follow us....</p>
                <div className='flex gap-10 items-center icon'>
                    <Link><li className='flex text-center text-7xl'><FaFacebook></FaFacebook></li></Link>
                    <Link><li className='flex text-center text-7xl'><FaSquareXTwitter/></li></Link>
                    <Link><li className='flex text-center text-7xl'><FaLinkedin /></li></Link>
                    <Link><li className='flex text-center text-7xl'><FaGooglePlusSquare /></li></Link>
                    <Link><li className='flex text-center text-7xl'><FaYoutube /></li></Link>
                    <Link><li className='flex text-center text-7xl'><FaWhatsappSquare /></li></Link>
                    <Link><li className='flex text-center text-7xl'><FaTelegram /></li></Link>
                </div>
           
        </div>
    );
};

export default About;