import React from "react";
import HomePage from "../Component/HomePage";
import Concurents from "../Component/Concurents";
import Localisation from "../Component/Localisation";
import Thematics from "@/Component/Thematics";

const Home = () => {
    return (
        <div className="bg-greenlight pb-10">
            <HomePage />
            <Concurents />
            <Thematics />
            <Localisation />
        </div>
    );
};

export default Home;
