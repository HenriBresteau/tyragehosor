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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Themes />}></Route>
          <Route exact path="/KiDonneAKi" element={<KiDonneAKi />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
