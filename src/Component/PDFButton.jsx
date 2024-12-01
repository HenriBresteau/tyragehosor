import React from "react";

const PDFButton = ({ onExport }) => {
    return (
        <div>
            <button
                onClick={onExport}
                className="flex items-center gap-2 border border-transparent hover:border-green rounded-2xl px-4 py-2 bg-transparent hover:bg-greenlight transition-colors duration-300 hover:shadow-sm"
            >
                <img src="/dl.svg" alt="dl" />
                <p className="font-gilroy font-bold ">Exporter en PDF</p>
            </button>
        </div>
    );
};

export default PDFButton;
