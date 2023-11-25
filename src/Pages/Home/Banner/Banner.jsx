import { Carousel, Typography, Button } from "@material-tailwind/react";
const Banner = () => {
    return (
      

    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-full">
            <Typography
              variant="h1"
              color="white"
              className="mb-4  text-xl md:text-4xl lg:text-5xl"
            >
              Industry Excellence Award Winner
            </Typography>
           
            
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-full md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl text-center"
            >
            100,000 Satisfied Customers
            </Typography>
           
           
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1661593062495-08c945c2e077?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-full md:pl-20 lg:pl-10">
            <Typography
              variant="h1"
              color="white"
              className="text-xl md:text-4xl lg:text-5xl text-center"
            >
              Proudly Operating in 100 Countries
            </Typography>
           
           
          </div>
        </div>
      </div>
    </Carousel>

   

     
    );
};

export default Banner;