import React from "react";

const ThemeListItem = ({ item, emoji }) => (
    <li className="py-2 px-4 w-fit border-2 border-greenlight/50 rounded-lg uppercase">
        <div className="flex gap-1 items-center">
            <p className="text-xl">{emoji}</p>
            <p className="font-gilroy font-bold">{item}</p>
        </div>
    </li>
);
export default ThemeListItem;
