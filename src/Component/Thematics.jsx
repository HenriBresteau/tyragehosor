import React from "react";
import ThematicsCloud from "./ThematicsCloud";

const Thematics = () => {
    return (
        <div className="pt-0 pb-16 w-full overflow-hidden">
            <div className="flex flex-col items-center gap-10 max-w-5xl mx-auto">
                <div className="flex flex-col  gap-4 items-center">
                    <img src="/idea.svg" alt="idea" />
                    <h2 className="font-gilroy font-bold text-5xl">Thèmes</h2>
                    <p className="font-fanwood text-center text-2xl text-primary w-full max-w-2xl">
                        Découvrez les thèmes de l’année 2025 pour notre tirage
                        au sort de Noël. Quels cadeaux et surprises se cachent
                        derrière ces idées uniques ?
                    </p>
                </div>
                <ThematicsCloud />
            </div>
        </div>
    );
};

export default Thematics;
