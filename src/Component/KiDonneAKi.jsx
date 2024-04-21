import {
  GiftIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import Button from "./Button";
import Title from "./Title";
import JsPDF from 'jspdf';
import PDFButton from "./PDFButton";
import html2pdf from 'html2pdf.js';

const KiDonneAKi = () => {
  const [person, setPerson] = useState("");
  const [listPerson, setListPerson] = useState([
    { nom: "Antoine", url: "/Antoine.png" },
    { nom: "Alexis", url: "/Alexis.png" },
    { nom: "Bastien", url: "/Bastien.png" },
    { nom: "Bérangère", url: "/Berangere.png" },
    { nom: "Brigitte", url: "/Brigitte.png" },
    { nom: "Chloé", url: "/Chloe.png" },
    { nom: "Elvina", url: "/Elvina.png" },
    { nom: "Gérald", url: "/Gerald.png" },
    { nom: "Henri", url: "/Henri.png" },
    { nom: "Jean-Marie", url: "/Jean-Marie.png" },
    { nom: "Julie", url: "/Julie.png" },
    { nom: "Manon", url: "/Manon.png" },
    { nom: "Mathis", url: "/Mathis.png" },
    { nom: "Maurane", url: "/Maurane.png" },
    { nom: "Ninon", url: "/Ninon.png" },
    { nom: "Sylviane", url: "/Sylviane.png" },
    { nom: "Vanessa", url: "/Vanessa.png" },
    { nom: "Vanille", url: "/Vanille.png" },
  ]);

  const [donneur, setDonner] = useState({});
  const [listDonneur, setListDonner] = useState([]);
  console.log("🚀 ~ file: KiDonneAKi.jsx:37 ~ KiDonneAKi ~ listDonneur:", listDonneur)
  const [isLoading, setIsLoading] = useState(false);

  const disabledBtn = person.length > 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    setListPerson((prev) => [...prev, { nom: person, url: `/${person}.png` }]);
    setPerson("");
  };

  const handleDelete = (e) => {
    console.log("delete");
    const id = e.currentTarget.id;
    setListPerson(listPerson.filter((list) => list.nom !== id));
  };

  const BoxList = ({ item }) => (
    <li className="py-2 px-4 w-fit border-2 border-black bg-transparent rounded-lg font-[GilroyB] uppercase flex items-center space-x-2">
      <p className="px-2 tracking-widest ">{item}</p>
      <TrashIcon
        id={item}
        className="w-5 h-5 text-red-600 cursor-pointer transition-colors hover:text-red-400 "
        onClick={handleDelete}
      />
    </li>
  );

  const BoxPersonList = ({ item, url }) => {
    const image = url ? url : "/winner.png";

    return (
      <li className="py-2 px-4 gap-2 flex flex-col items-center space-x-2">
        <span className="w-32 h-32 border-4 border-black rounded-full">
          <img src={`persons/${image}`} alt="winner" className="rounded-full" />
        </span>
        <p className="px-2 tracking-widest uppercase font-[GilroyB] ">{item}</p>
      </li>
    );
  };

  const handleDraw = () => {
    let donner = Math.floor(Math.random() * listPerson.length);
    setIsLoading(true);
    setTimeout(() => {
      setDonner(listPerson[donner]);
      setListPerson(listPerson.filter((list) => list !== listPerson[donner]));
      listDonneur.push(listPerson[donner]);
      setIsLoading(false);
    }, 3600);
    setDonner("");
  };
  const LoadingSpinner = isLoading ? "animate-rotateCenter" : "";

  const listRef = useRef(null);

  const exportToPdf = () => {
    const options = {
      margin: 10,
      filename: 'liste_tirage_au_sort.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf(listRef.current, options);
  };
  return (
    <div className="my-10 mx-auto max-w-md lg:max-w-4xl overflow-hidden">
      <Title>KiDonneAki ?</Title>

      <form
        className="py-4 flex items-center space-x-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Henri"
          className="px-4 py-2 border-transparent bg-gray-100  rounded-md font-[GilroyB] text-[#7C90A0] focus:border-gray-500 focus:bg-white focus:ring-0 "
          value={person}
          onChange={(e) => setPerson(e.target.value)}
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
        <h2 className="mt-2 mb-4 text-xl underline underline-offset-4">
          Liste des personnes :
        </h2>
        <ul className="flex gap-4 flex-wrap">
          {listPerson.map((item, index) => (
            <BoxList item={item.nom} key={index} handleDelete={handleDelete} />
          ))}
        </ul>
        <Button handleDraw={handleDraw}></Button>
      </div>

      <div className="mt-12 bg-transparent border-black border-2 py-6 px-6 rounded-lg grid grid-cols-2 items-center justify-items-center ">
        <span>
          <img src="/lama.png" alt="Tyragehore" className="h-[200px]" />
        </span>
        <p className="text-[#7C90A0] uppercase font-[GilroyB] text-3xl mt-2 ">
          {Object.keys(donneur).length > 1 ? (
            <>
              {donneur.nom}
              <span className="">
                <img
                  src={`persons/${donneur.url}`}
                  alt=""
                  className="absolute w-[240px] h-[240px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]   animate-zoom"
                />
              </span>
            </>
          ) : (
            <img className={`${LoadingSpinner} w-20 h-20`} src="/gift_close.svg" alt="cadeau de noel" />
          )}
        </p>
      </div>
      <ul ref={listRef} id="list" className="mt-6 flex gap-4 flex-wrap">
        {listDonneur.map((item, index) => (
          <div className="flex items-center justify-center" key={index}>
            <BoxPersonList item={item.nom} url={item.url} />
            <span>
              {/* <GiftIcon className="w-8 h-8 text-[#7C90A0] " /> */}
              <img className="w-16 h-16" src="/gift_open.svg" alt="cadeau de noel" />
            </span>
          </div>
        ))}
      </ul>
      <footer className="mt-10"> <PDFButton onExport={exportToPdf}/> </footer>
    </div>
  );
};

export default KiDonneAKi;
