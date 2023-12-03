import About from "../About/About";
import Banner from "../Banner/Banner";
import Parntner from "../Parnter/Parntner";
import Service from "../Services/Service";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div className="w-full">
            <Banner></Banner>
            <Service></Service>
            <Testimonials></Testimonials>
            <Parntner></Parntner>
            <About></About>
            
        </div>
    );
};

export default Home;