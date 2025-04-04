import { useState } from "react";
import "../styles/ToggleVisibilidade.css";

interface ToggleVisibilidadeProps {
  texto: string;
}

const ToggleVisibilidade: React.FC<ToggleVisibilidadeProps> = ({ texto }) => {
  const [visibilidade, setVisibilidade] = useState(false);

  return (
    <div className="texto-visibilidade-conteiner">
      {visibilidade && <p className="texto-visibilidade">{texto}</p>}
      <button
        className="btt-generico"
        onClick={() => setVisibilidade(!visibilidade)}
      >
        {visibilidade ? "Esconder" : "Mostrar"}
      </button>
    </div>
  );
};

export default ToggleVisibilidade;
