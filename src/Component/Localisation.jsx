import React from "react";
import Globe from "@/components/ui/globe";
import LocalisationCard from "./LocalisationCard";

const Localisation = () => {
    return (
        <div className="py-20 px-8 w-full overflow-hidden rounded-[4rem] bg-white">
            <div className="flex flex-col gap-10 max-w-5xl mx-auto">
                <div className="flex gap-4 items-center">
                    <img src="/infos.svg" alt="informations" />
                    <h2 className="font-gilroy font-bold text-5xl">
                        Informations
                    </h2>
                </div>
                <div className="flex gap-8">
                    <LocalisationCard
                        title="Lieu"
                        text="Chez Sylviane à Trélazé"
                    />
                    <LocalisationCard
                        title="Date"
                        text="Le 28 Décembre à 12h"
                    />
                    <div className="relative flex size-full max-w-sm items-center justify-center">
                        <Globe />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Localisation;
