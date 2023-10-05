import React from "react";
import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <div className="flex max-md:flex-col gap-10 items-center justify-center max-lg:flex-wrap">
      {services.map((service) => (
        <ServiceCard
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </div>
  );
};

export default Services;
