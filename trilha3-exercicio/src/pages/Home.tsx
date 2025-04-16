import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const irParaSobre = () => {
    navigate("/about");
  };

  return (
    <>
      <h1>Home</h1>
      <button className="home-button" onClick={irParaSobre}>
        Ir para Sobre
      </button>
    </>
  );
};

export default Home;
