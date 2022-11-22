import React from "react";

const Button = ({ handleDraw }) => {
  return (
    <div className="my-4 pt-12">
      <button
        className="bg-gradient-to-r from-[#30CFD0] to-[#330867] border-2 border-white py-4 px-6 rounded-md font-[GilroyB] tracking-widest text-xl"
        onClick={handleDraw}
      >
        Tyragehösor
      </button>
    </div>
  );
};

export default Button;
