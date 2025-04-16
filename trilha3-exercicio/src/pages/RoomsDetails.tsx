import { useParams, useNavigate } from "react-router-dom";

const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const reservar = () => {
    navigate("/booking-success");
  };

  return (
    <div>
      <h1>Detalhes do Quarto {id}</h1>
      <p>Informações sobre o quarto {id}...</p>
      <button onClick={reservar}>Reservar</button>
    </div>
  );
};

export default RoomDetails;
