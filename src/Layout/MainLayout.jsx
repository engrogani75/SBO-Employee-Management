import { Outlet } from "react-router-dom";
import Nav from "../Shared/NavBar/Nav";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
           <Nav></Nav>
            <Outlet></Outlet>
      
           <Footer></Footer>
   
        </div>
    );
};

export default MainLayout;