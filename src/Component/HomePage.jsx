import { Link } from "react-router-dom";
import Title from "./Title";

const HomePage = () => {
    return (
        <div className="py-28 px-8 w-full overflow-hidden rounded-b-[4rem] bg-white">
            <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                <div className="flex gap-4 items-center">
                    <div className="relative">
                        <div className="absolute -top-8 -translate-y-1/2 left-2 -translate-x-1/2 pointer-events-none">
                            <img
                                src="/diams.svg"
                                alt="Diams"
                                className="-rotate-12"
                            />
                        </div>
                        <Title>
                            Bienvenue sur le{" "}
                            <span className="text-green">Tyragehösor</span> pour
                            le noël 2024
                        </Title>
                        <div className="absolute -bottom-0 translate-y-1/4 right-0 -translate-x-1/2 pointer-events-none">
                            <img
                                src="/tree.svg"
                                alt="Diam"
                                className="rotate-12 w-20 h-20"
                            />
                        </div>
                    </div>
                    <div className="bg-bg rounded-3xl h-full w-full flex items-center justify-center relative">
                        <img
                            src="/t-rex.webp"
                            alt="T-Rex"
                            className="w-80 h-80 "
                        />
                        <div className="absolute -bottom-0 translate-y-1/4 right-0 pointer-events-none">
                            <img
                                src="/gift.svg"
                                alt="Diam"
                                className="rotate-12 w-28 h-28"
                            />
                        </div>
                        <div className="absolute -top-0 -translate-y-1/2 left-0 -translate-x-1/4 pointer-events-none ">
                            <img
                                src="/stars.svg"
                                alt="stars"
                                className="rotate-12 w-20 h-20"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-greenlight/10 rounded-2xl p-6  mx-auto relative">
                    <div className="max-w-[14rem]">
                        <p className="font-gilroy font-normal text-lg leading-6 text-balance ">
                            Passer directement aux choix du theme
                        </p>
                    </div>
                    <Link to="/Themes">
                        <div className="rounded-lg px-8 py-4 bg-green text-white font-gilroy font-extrabold w-fit">
                            Choix du thème
                        </div>
                    </Link>
                    <div className="absolute bottom-0 right-0 translate-y-3/4 -translate-x-2/3">
                        <img src="/green-arrow 1.svg" alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
