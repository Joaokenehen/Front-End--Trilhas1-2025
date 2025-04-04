import { useState } from "react";
import "../styles/Contador.css";

const Contador = () => {
  const [valorContador, setValorContador] = useState(0);

  const onClickContadorIncrementar = () => {
    setValorContador(valorContador + 1);
  };
  const onClickContadorDecrementar = () => {
    setValorContador(valorContador - 1);
  };

  const mensagemNegativa = valorContador < 0 ? "O valor é negativo" : "";
  const mensagemPositiva = valorContador > 0 ? "O valor é positivo" : "";
  const mensagemNula = valorContador === 0 ? "O valor é nulo" : "";

  return (
    <div className="contador-conteiner">
      <button onClick={onClickContadorIncrementar} className="btt-incrementar">
        Incrementar
      </button>
      <p style={{ color: "black" }}>{valorContador}</p>
      <button onClick={onClickContadorDecrementar} className="btt-decrementar">
        Decrementar
      </button>
      <p>
        {mensagemNegativa}
        {mensagemPositiva}
        {mensagemNula}
      </p>
    </div>
  );
};

export default Contador;
