import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Exercicio1 from "./pages/Exercicio1";
import Exercicio2 from "./pages/Exercicio2";
import Exercicio3 from "./pages/Exercicio3";
import Exercicio4 from "./pages/Exercicio4";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercicio1" element={<Exercicio1 />} />
          <Route path="/exercicio2" element={<Exercicio2 />} />
          <Route path="/exercicio3" element={<Exercicio3 />} />
          <Route path="/exercicio4" element={<Exercicio4 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
