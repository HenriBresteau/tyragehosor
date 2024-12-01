import React, { useRef, useState } from "react";
import Button from "./Button";
import Title from "./Title";
import PDFButton from "./PDFButton";
import html2pdf from "html2pdf.js";
import { persons } from "@/data/persons";
import ThemeListItem from "./ThemeListItem";
import CardPerson from "./CardPerson";

const KiDonneAKi = () => {
    const [listPerson, setListPerson] = useState(persons);

    const [donneur, setDonner] = useState({});
    const [listDonneur, setListDonner] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleDraw = () => {
        let donner = Math.floor(Math.random() * listPerson.length);
        setIsLoading(true);
        setTimeout(() => {
            setDonner(listPerson[donner]);
            setListPerson(
                listPerson.filter((list) => list !== listPerson[donner])
            );
            listDonneur.push(listPerson[donner]);
            setIsLoading(false);
        }, 3600);
        setDonner("");
    };
    const LoadingSpinner = isLoading ? "animate-rotateCenter" : "";

    const listRef = useRef(null);

    const exportToPdf = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        const options = {
            margin: 10,
            filename: `TYRAGOSOR_2024_${hours}-${minutes}-${seconds}.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        };
        html2pdf(listRef.current, options);
    };
    return (
        <div className="my-10 mx-auto max-w-md lg:max-w-5xl overflow-hidden">
            <Title>KiDonneAki ?</Title>

            <div className="my-4">
                <h2 className="mt-2 mb-4 text-xl">Liste des personnes :</h2>
                <ul className="flex gap-4 flex-wrap">
                    {listPerson.map((item) => (
                        <ThemeListItem item={item.name} key={item.id} />
                    ))}
                </ul>
                <Button handleDraw={handleDraw}></Button>
            </div>

            <div className="mt-12 bg-transparent border-greenlight border-2 py-6 px-6 rounded-lg grid grid-cols-2 items-center justify-items-center ">
                <span>
                    <img
                        src="/t-rex-icon.png"
                        alt="Tyragehore"
                        className="w-40 h-40"
                    />
                </span>
                <div className="text-[#7C90A0] uppercase font-[GilroyB] text-3xl mt-2 ">
                    {Object.keys(donneur).length > 1 ? (
                        <>
                            <p className="font-gilroy font-bold text-green uppercase">
                                {donneur.name}
                            </p>
                            <span className="">
                                <img
                                    src={`persons/${donneur.url}`}
                                    alt=""
                                    className="absolute w-[240px] h-[240px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]   animate-zoom"
                                />
                            </span>
                        </>
                    ) : (
                        <img
                            className={`${LoadingSpinner} w-20 h-20`}
                            src="/gift_close.svg"
                            alt="cadeau de noel"
                        />
                    )}
                </div>
            </div>
            <div ref={listRef} className="py-8">
                <h2 className="text-2xl font-gilroy font-bold mb-4">
                    Liste 2024 :
                </h2>
                <ul
                    // ref={listRef}
                    id="list"
                    className="mt-6 flex gap-4 flex-wrap"
                >
                    {listDonneur.map((item, index) => (
                        <div
                            className="flex items-center justify-center"
                            key={index}
                        >
                            <CardPerson item={item.name} url={item.url} />
                            <span>
                                <img
                                    className="w-16 h-16"
                                    src="/gift_open.svg"
                                    alt="cadeau de noel"
                                />
                            </span>
                        </div>
                    ))}
                </ul>
            </div>
            <footer className="my-10">
                <PDFButton onExport={exportToPdf} />
            </footer>
        </div>
    );
};

export default KiDonneAKi;
