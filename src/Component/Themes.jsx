import {
  GiftIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Title from "./Title";
import JSConfetti from "js-confetti";

export const Themes = () => {
  const [theme, setTheme] = useState("");
  const [listTheme, setListTheme] = useState([
    "🍸 Apéro",
    "🏴‍☠️ Pirate",
    "⭐ Étoiles",
    "🪰 Mouche",
    "🟣 Murasaki",
    "🧶 Bonnet",
    "🎱 Boule",
    "🚀 La conquête spatiale",
    "🐔 Poule",
    "🍷 Vin",
    "🏠 Spécialité Locale",
    "🍨 Vanille",
    "🕯️ Lumière",
    "🍯 Confiture",
    "🧊 Hiver",
    "💡 Réflexion",
  ]);
  const canvas = document.getElementById("custom_canvas");
  const jsConfetti = new JSConfetti({ canvas });
  const [winner, setWinner] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const disabledBtn = theme.length > 1;

  function handleSubmit(e) {
    e.preventDefault();
    setListTheme((prev) => [...prev, theme]);
    setTheme("");
  }

  const handleDelete = (e) => {
    const id = e.currentTarget.id;
    setListTheme(listTheme.filter((list) => list !== id));
  };

  const BoxList = ({ item }) => (
    <li className="py-2 px-4 w-fit border-2 rounded-lg font-[GilroyB] uppercase flex items-center space-x-2 ">
      <p className="px-2 tracking-widest ">{item}</p>
      <TrashIcon
        id={item}
        className="w-5 h-5 text-red-400 cursor-pointer transition-colors hover:text-red-600 "
        onClick={handleDelete}
      />
    </li>
  );
  const handleDraw = () => {
    let winner = Math.floor(Math.random() * listTheme.length);
    let winnerConfetti = listTheme[winner].split(" ")[0];
    setIsLoading(true);
    setTimeout(() => {
      setWinner(listTheme[winner]);
      setIsLoading(false);
      setTimeout(() => {
        jsConfetti.addConfetti({
          emojis: [winnerConfetti],
        });
      }, 750);
    }, 3600);
    setWinner("");
  };

  const LoadingSpinner = isLoading ? "animate-rotateCenter" : "";

  return (
    <div className="my-10 mx-auto max-w-md lg:max-w-4xl overflow-hidden">
      <Title>Thèmes</Title>
      <p>
        Ajoutez plusieurs éléments à tirer au sort, puis cliquez sur "Tirer au
        sort"..
      </p>
      <form
        className="py-4 flex items-center space-x-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Feu"
          className="px-4 py-2 border-transparent bg-gray-100  rounded-md font-[GilroyB] text-[#7C90A0] focus:border-gray-500 focus:bg-white focus:ring-0 "
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />

        <button
          type="submit"
          className="bg-[#7C90A0] px-2 py-2 rounded-md transition-all hover:bg-white hover:text-[#7C90A0] disabled:opacity-75 disabled:cursor-not-allowed "
          disabled={!disabledBtn}
        >
          <PlusCircleIcon className="h-6 w-6 " />
        </button>
      </form>

      <div className="my-4">
        <h2 className="py-2 text-xl">Liste des thèmes :</h2>
        <ul className="flex gap-4 flex-wrap">
          {listTheme.map((item, index) => (
            <BoxList item={item} key={index} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>

      <div className="my-4 pt-12">
        <button
          className="bg-gradient-to-r from-[#7C90A0] to-[#330867] border-2 border-white py-4 px-6 rounded-md font-[GilroyB] tracking-widest text-xl"
          onClick={handleDraw}
        >
          Tyragehösor
        </button>
      </div>

      <div className="mt-12 bg-white py-6 px-6 rounded-lg grid grid-cols-2 items-center justify-items-center ">
        <span>
          <img src="/winner.png" alt="Tyragehore" className="w-40 h-40" />
        </span>
        <p className="text-[#7C90A0] uppercase font-[GilroyB] text-3xl mt-2 w-fit ">
          {winner.length > 1 ? (
            <>
              {winner}
              <canvas
                id="custom_canvas"
                className="w-full h-full hidden"
              ></canvas>
            </>
          ) : (
            <GiftIcon className={`${LoadingSpinner} w-20 h-20`} />
          )}
        </p>
      </div>
    </div>
  );
};
