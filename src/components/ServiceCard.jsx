import React from "react";

const ServiceCard = ({ imgURL, subtext, label }) => {
  return (
    <div className="max-md:w-[320px] max-md:h-[287px] rounded-2xl w-[370px] h-[330px] bg-white py-12 pt-14 px-10 space-y-4 drop-shadow-xl">
      <img
        src={imgURL}
        alt={label}
        className="w-15 h-15 p-2.5 rounded-full bg-coral-red"
      />
      <h2 className="font-bold text-3xl font-palanquin leading-7">{label}</h2>
      <p className="info-text">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
