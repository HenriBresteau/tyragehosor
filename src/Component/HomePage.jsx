import React, { useState } from "react";
import Title from "./Title";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
    return (
        <div className="my-10 mx-auto max-w-md lg:max-w-4xl overflow-hidden">
            <Title>Bienvenue sur le Tyragehösor pour le noël 2023</Title>
            <div className="w-100 bg-slate-50 p-6 leading-5 shadow-xl shadow-yellow/5 ring-yellow-400 border-l-4 border-yellow-400 ">
                <div className="flex gap-4">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-black"
                    >
                        <path
                            d="M35.464 8.39467L58.488 48.272C58.839 48.8801 59.0239 49.5698 59.0239 50.272C59.0239 50.9741 58.8391 51.6639 58.488 52.272C58.1369 52.88 57.632 53.385 57.0239 53.7361C56.4159 54.0871 55.7261 54.272 55.024 54.272H8.97597C8.27383 54.272 7.58407 54.0871 6.97601 53.7361C6.36795 53.385 5.86301 52.88 5.51195 52.272C5.16089 51.6639 4.97607 50.9741 4.97607 50.272C4.97608 49.5698 5.1609 48.8801 5.51197 48.272L28.536 8.39467C30.0746 5.728 33.9226 5.728 35.464 8.39467ZM32 13.0613L11.2853 48.9387H52.7146L32 13.0613ZM32 40C32.7072 40 33.3855 40.281 33.8856 40.7811C34.3857 41.2811 34.6666 41.9594 34.6666 42.6667C34.6666 43.3739 34.3857 44.0522 33.8856 44.5523C33.3855 45.0524 32.7072 45.3333 32 45.3333C31.2927 45.3333 30.6145 45.0524 30.1144 44.5523C29.6143 44.0522 29.3333 43.3739 29.3333 42.6667C29.3333 41.9594 29.6143 41.2811 30.1144 40.7811C30.6145 40.281 31.2927 40 32 40ZM32 21.3333C32.7072 21.3333 33.3855 21.6143 33.8856 22.1144C34.3857 22.6145 34.6666 23.2928 34.6666 24V34.6667C34.6666 35.3739 34.3857 36.0522 33.8856 36.5523C33.3855 37.0524 32.7072 37.3333 32 37.3333C31.2927 37.3333 30.6145 37.0524 30.1144 36.5523C29.6143 36.0522 29.3333 35.3739 29.3333 34.6667V24C29.3333 23.2928 29.6143 22.6145 30.1144 22.1144C30.6145 21.6143 31.2927 21.3333 32 21.3333Z"
                            fill="currentColor"
                        />
                    </svg>
                    <div>
                        <div className="font-bold text-black uppercase font-[GilroyB] text-xl ">
                            Flash info
                        </div>
                        <div className="mt-2 text-black text-xl">
                            <p>
                                En raison d'un incident de type
                                <strong className="font-[GilroyB]">
                                    "Pull Moche de Noël"
                                </strong>
                                , le choix du thème n'est pas disponible cette
                                année.
                            </p>
                            <button
                                type="button"
                                className="text-black bg-yellow-800 hover:bg-yellow-900 focus:ring-2 focus:outline-none focus:ring-yellow-300 font-[GilroyB] text-base rounded-lg px-4 py-3 gap-3 text-center inline-flex items-center dark:bg-yellow-300 dark:text-gray-800 dark:hover:bg-yellow-400 dark:focus:ring-yellow-800 my-4"
                                onClick={() => {
                                    setShowModal(true);
                                }}
                            >
                                <svg
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 14"
                                >
                                    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                </svg>
                                En savoir plus
                            </button>
                            {showModal ? (
                                <>
                                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            {/*content*/}
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                    <h3 className="text-xl font-[GilroyB]">
                                                        Le pull moche de noël{" "}
                                                    </h3>
                                                    <button
                                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() =>
                                                            setShowModal(false)
                                                        }
                                                    >
                                                        <span className="bg-transparent text-black  h-6 w-6 text-4xl block outline-none focus:outline-none">
                                                            ×
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <div className="my-4">
                                                        <p className="my-4">
                                                            Et c'est Maurane qui
                                                            a gagné cette
                                                            édition,{" "}
                                                            <span className="text-base font-[GilroyB]">
                                                                {" "}
                                                                malgré une
                                                                triche évidente
                                                            </span>{" "}
                                                            car on pouvait lui
                                                            tirer dessus avec
                                                            des boules &#40;de
                                                            noël&#41;.
                                                        </p>
                                                        <img
                                                            className="mx-auto"
                                                            src="/winner.jpg"
                                                            alt="Momo qui gagne le pull moche"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                            <p className="mb-4">Le thème imposé pour cette année est : </p>
                            <div className="font-[GilroyB] flex items-center gap-2 mb-4"> <img src="/amerique-latin.svg" alt="Amerique latine" />Amérique Latine</div>
                            <p>
                                Nous estimons que la reprise de ce service ne
                                reprendra pas avant l'année prochaine.
                            </p>
                            <p className="mt-2">Cordialement </p>
                            <p className="flex justify-end">La Direction</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
            <Title>Passer au KiDonneAKi</Title>
            </div>
        </div>
    );
};

export default HomePage;
