import ToggleVisibilidade from "../components/ToggleVisibilidade";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Exercicio4 = () => {
  return (
    <div>
      <h1>Exercício 4</h1>
      <ToggleVisibilidade texto={"Esse é o texto oculto"} />
      <div className="home">
        <Link className="home-link" to="/exercicio1">
          Exercício 1
        </Link>
        <Link className="home-link" to="/exercicio2">
          Exercício 2
        </Link>
        <Link className="home-link" to="/exercicio3">
          Exercício 3
        </Link>
        <Link className="home-link" to="/exercicio4">
          Exercício 4
        </Link>
      </div>
      <Link className="home-page-link" to="/">
        Home
      </Link>
    </div>
  );
};

export default Exercicio4;
