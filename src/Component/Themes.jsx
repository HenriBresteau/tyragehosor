import { themes } from "@/data/themes";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import JSConfetti from "js-confetti";
import React, { forwardRef, useRef, useState } from "react";
import Button from "./Button";
import ThemeListItem from "./ThemeListItem";
import Title from "./Title";

const LottiePlayer = forwardRef((props, ref) => {
    const [dotLottie, setDotLottie] = React.useState(null);

    const dotLottieRefCallback = (dotLottie) => {
        setDotLottie(dotLottie);
        if (ref) {
            if (typeof ref === "function") {
                ref(dotLottie);
            } else {
                ref.current = {
                    play: () => dotLottie.play(),
                };
            }
        }
    };

    return (
        <DotLottieReact
            src="/gift.lottie"
            autoplay={false}
            dotLottieRefCallback={dotLottieRefCallback}
            {...props}
        />
    );
});

export const Themes = () => {
    const canvas = document.getElementById("custom_canvas");
    const jsConfetti = new JSConfetti({ canvas });
    const [listTheme, setListTheme] = useState(themes);
    const [winner, setWinner] = useState({});

    const lottieRef = useRef(null);

    const handleDraw = () => {
        setWinner({});
        let winnerLine = Math.floor(Math.random() * listTheme.length);
        const selectedWinner = listTheme[winnerLine];
        if (lottieRef.current) {
            lottieRef.current.play();
        }
        setTimeout(() => {
            setWinner(selectedWinner);
            console.log(winner);

            jsConfetti.addConfetti({
                emojis: [selectedWinner.emoji],
                confettiNumber: 75,
            });
        }, 3600);
        jsConfetti.clearCanvas();
    };
    return (
        <div className="my-10 mx-auto max-w-md lg:max-w-5xl overflow-hidden">
            <Title>Thèmes 2025</Title>
            <div className="my-4">
                <h2 className="py-2 text-xl">Liste des thèmes :</h2>
                <ul className="flex gap-4 flex-wrap">
                    {listTheme.map((item) => (
                        <ThemeListItem
                            emoji={item.emoji}
                            item={item.name}
                            key={item.id}
                        />
                    ))}
                </ul>
            </div>

            <div className="my-4">
                <Button handleDraw={handleDraw}></Button>
            </div>

            <div className="mt-12 bg-white py-6 px-6 rounded-lg grid grid-cols-2 items-center justify-items-center ">
                <span>
                    <img
                        src="/t-rex-icon.png"
                        alt="Tyragehore"
                        className="w-40 h-40"
                    />
                </span>
                {winner.name ? (
                    <>
                        <div className="flex flex-col text-xl font-bold opacity-100 transition-opacity ">
                            Le thème gagnant est :{" "}
                            <span className="text-green uppercase font-gilroy font-bold text-5xl">
                                {winner.emoji}
                                {winner.name}
                            </span>
                            <canvas
                                id="custom_canvas"
                                className="w-full h-full hidden"
                            ></canvas>
                        </div>
                    </>
                ) : (
                    <LottiePlayer ref={lottieRef} />
                )}

               {winner.name && (
                    <div className="col-span-2 relative mt-4">
                        <blockquote className="relative bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl px-8 py-5 shadow-2xl border-4 border-green-700">
                            <div className="absolute -top-6 left-20">
                                <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-green-700"></div>
                            </div>
                            <p className="font-gilroy font-bold text-2xl text-black text-center drop-shadow-lg">
                                {winner.message || "Bonne chance pour trouver une idée 😬"}
                            </p>
                        </blockquote>
                    </div>
                )}
            </div>
        </div>
    );
};
