import Contador from "../components/Contador";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Exercicio1 = () => {
  return (
    <div>
      <h1>Exercício 1</h1>
      <h2>Contador</h2>
      <Contador />
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

export default Exercicio1;
