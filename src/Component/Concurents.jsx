import { NumberTicker } from "@/components/ui/number-ticker";
import { persons } from "@/data/persons";
import { Sparkles } from "lucide-react";
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
            <div className="flex items-center w-fit mx-auto mb-8 px-8 py-6 bg-green text-white backdrop-blur-mb rounded-full relative shadow-md border-2 border-green hover:border-white transition-all duration-300">
                <span className="absolute -top-4 right-12 flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-md font-medium rounded-full shadow-lg z-10">
                    <Sparkles className="w-4 h-4" />
                    Nouveau record !
                </span>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-gilroy text-lg">Au total</span>
                        <NumberTicker value={persons.length} />
                        <span className="font-gilroy text-lg">participants !</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Concurents;
