import React from "react";

const Button = ({ handleDraw }) => {
  return (
    <div className="my-4 pt-12">
      <button
        className="flex items-center gap-2 bg-black border-2 border-white text-white py-4 px-6 rounded-md font-[GilroyB] tracking-widest text-xl transition-colors hover:text-slate-900 hover:bg-slate-100 "
        onClick={handleDraw}
      >
        Tyragehösor
        <img src="/cactus-1.svg" alt="cactus" className=""/>
      </button>
    </div>
  );
};

export default Button;
