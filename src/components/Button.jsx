import React from "react";

const Button = ({ label, iconURL, type }) => {
  const buttonClass = type === "filled" || !type ? "bg-coral-red text-white" : "bg-none text-slate-gray border-slate-gray" 
  return (
    <button
      onClick={() => alert("Coming Soon!")}
      className={`flex justify-center items-center gap-2 px-7
      py-4 font-montserrat text-lg leading-1 border ${buttonClass}
      rounded-full border-coral-red font-medium`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow-right-icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
