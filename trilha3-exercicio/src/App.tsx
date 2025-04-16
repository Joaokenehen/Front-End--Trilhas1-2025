import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Animal from "./pages/Animal";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomsDetails";
import BookingSuccess from "./pages/BookingSuccess";
import "./styles/home.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menu de Navegação */}
        <nav className="home">
          <Link className="home-link" to="/">
            Home
          </Link>
          <Link className="home-link" to="/about">
            Sobre
          </Link>
          <Link className="home-link" to="/contact">
            Contato
          </Link>
          <Link className="home-link" to="/rooms">
            Quartos
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/animal/:nome" element={<Animal />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
