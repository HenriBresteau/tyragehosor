import {
    BrowserRouter as Router,
    Route,
    Link as NavLink,
    Routes,
} from "react-router-dom";
import "./App.css";
import KiDonneAKi from "./Component/KiDonneAKi";
import Navbar from "./Component/Navbar";
import { Themes } from "./Component/Themes";
import HomePage from "./Component/HomePage";

function App() {
    return (
        <Router>
            <div className="App relative">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        exact
                        path="/KiDonneAki"
                        element={<KiDonneAKi />}
                    ></Route>
                    <Route exact path="/Themes" element={<Themes />}></Route>
                </Routes>
                <img src="/cactus-1.svg" alt="cactus" className="absolute bottom-0 right-0 h-20 w-20" />
                <img src="/cactus-2.svg" alt="cactus" className="absolute bottom-0 left-0 h-20 w-20" />
            </div> 
        </Router>
    );
}

export default App;
