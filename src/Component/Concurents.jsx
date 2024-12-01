import React from "react";
import { ConcurentMarquee } from "./ConcurentMarquee";

const Concurents = () => {
    return (
        <div className="py-16 px-8 w-full overflow-hidden ">
            <div className="flex flex-col justify-center gap-6 max-w-5xl mx-auto">
                <h2 className="font-gilroy text-2xl text-center">
                    Participants de cette année :
                </h2>
            </div>
            <ConcurentMarquee />
        </div>
    );
};

export default Concurents;
