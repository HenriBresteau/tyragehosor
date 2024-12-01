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
import Home from "./Pages/Home";

function App() {
    return (
        <Router>
            <div className="App relative">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        exact
                        path="/KiDonneAki"
                        element={<KiDonneAKi />}
                    ></Route>
                    <Route exact path="/Themes" element={<Themes />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
