import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <h1>Desenvolvimento Front-end</h1>
      <h2>Trilha 2 - Exercícios</h2>
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
    </div>
  );
};

export default Home;
