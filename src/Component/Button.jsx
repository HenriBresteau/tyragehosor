import React from "react";

const Button = ({ handleDraw }) => {
    return (
        <div className="my-4 pt-12">
            <button
                className="flex items-center gap-2 bg-green text-white py-4 px-6 rounded-md font-gilroy font-bold uppercase tracking-widest text-xl transition-colors  hover:bg-greenlight "
                onClick={handleDraw}
            >
                Tyragehösor
            </button>
        </div>
    );
};

export default Button;
