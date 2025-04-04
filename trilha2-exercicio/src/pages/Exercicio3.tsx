import Saudacao from "../components/Saudacao";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Exercicio3 = () => {
  return (
    <div>
      <h1>Exercício 2</h1>
      <Saudacao />
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

export default Exercicio3;
