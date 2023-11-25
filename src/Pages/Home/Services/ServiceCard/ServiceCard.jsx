import {
    Card,
    CardHeader,
    CardBody,
    Typography,

  } from "@material-tailwind/react";

const ServiceCard = ({item}) => {
    return (
        <div className="transform">
           <Card className="max-w-[24rem] overflow-hidden hover:scale-110 hover:shadow-md transition-transform duration-300 hover:opacity-50">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={item.image}
          alt="ui/ux review check"
          className="h-[200px]"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
         {item.service_name}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
        {item.description}
        </Typography>
      </CardBody>
   
    </Card> 
        </div>
    );
};

export default ServiceCard;