import React from "react";

const CardPerson = ({ item, url }) => {
    return (
        <li className="py-2 px-4 gap-2 flex flex-col items-center space-x-2 opacity-100 transition-opacity duration-300">
            <span className="w-32 h-32 border-4 border-green rounded-full">
                <img
                    src={`persons/${url}`}
                    alt="winner"
                    className="rounded-full"
                />
            </span>
            <p className="px-2 tracking-widest uppercase font-gilroy font-bold text-green ">
                {item}
            </p>
        </li>
    );
};

export default CardPerson;
