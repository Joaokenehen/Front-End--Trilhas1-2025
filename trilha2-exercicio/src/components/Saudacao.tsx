import { useState } from "react";
import "../styles/Saudacao.css";

const Saudacao = () => {
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(false);

  const ativarSaudacao = () => {
    setMostrarSaudacao(!mostrarSaudacao);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      ativarSaudacao();
    }
  };

  return (
    <div className="saudacao-container">
      {mostrarSaudacao && nome && (
        <h3 className="saudacao-texto">Olá, {nome}!</h3>
      )}

      <input
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        placeholder="Digite seu nome"
        className="input-generico"
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={ativarSaudacao}
        className="btt-generico"
        disabled={!nome.trim()}
      >
        {mostrarSaudacao ? "Ocultar saudação" : "Mostrar saudação"}
      </button>
    </div>
  );
};

export default Saudacao;
