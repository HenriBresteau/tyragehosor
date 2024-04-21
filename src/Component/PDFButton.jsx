import jsPDF from "jspdf";
import React from "react";

const PDFButton = ({ onExport }) => {
    // const exportToPdf = () => {
    //     const pdf = new jsPDF();
    //     let yOffset = 10;
    //     list.forEach((item, index) => {
    //         const { nom, url } = item;
      
    //         // Ajoutez le nom à la position actuelle et incrémente le décalage Y
    //         pdf.text(20, yOffset, nom);
      
    //         // Ajoutez une image à côté du nom (ajustez les coordonnées en conséquence)
    //         pdf.addImage(`/persons/${url}`, 'PNG', 80, yOffset - 5, 10, 10);
      
    //         // Incrémente le décalage Y pour la prochaine entrée
    //         yOffset += 20;
    //       });

    //     pdf.save("liste_tirage_au_sort.pdf");
    // };

    return (
        <div>
            <button onClick={onExport} className="flex items-center gap-2">
                <img src="/dl.svg" alt="dl" />
                Exporter en PDF</button>
        </div>
    );
};

export default PDFButton;
