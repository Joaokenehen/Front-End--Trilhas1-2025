import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BuscarId from "./components/BuscarId";
import CriarUsuario from "./components/CriarUsuario";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="home">
          <Link className="home-link" to="/buscar-usuario">
            Buscar usuário
          </Link>
          <Link className="home-link" to="/cadastrar-usuario">
            Cadastrar usuário
          </Link>
        </nav>

        <Routes>
          <Route path="/buscar-usuario" element={<BuscarId />} />
          <Route path="/cadastrar-usuario" element={<CriarUsuario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
