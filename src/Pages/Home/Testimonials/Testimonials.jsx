import { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([])

    const url = `testimonials.json`
  
    useEffect(() =>{
      fetch(url)
      .then(res =>res.json())
      .then(data => {
         
        setTestimonials(data)
      })
  }, [url])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };


    return (
    
        <div>
        <h1 className="my-10 text-3xl font-bold text-center text-blue-800">Reviews the Company</h1>
      <Slider {...settings} className="mt-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                
                <h3 className="text-2xl mb-3">{testimonial.name}:</h3>                
                <p className="badge badge-secondary">Position: {testimonial.position}</p>
                <p>--------------------------------------------------------------</p>
                <p className="text-xl mb-4">{testimonial.quote}</p>
               
              </div>
            ))}
          </Slider>
      </div>
       
    );
};

export default Testimonials;