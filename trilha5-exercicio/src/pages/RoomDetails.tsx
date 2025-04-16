import { useNavigate, useParams } from "react-router-dom";
import { useRooms } from "../hooks/useRooms";
import Layout from "../components/Layout";

const RoomDetails = () => {
  const { id } = useParams();
  const { rooms } = useRooms();
  const navigate = useNavigate();

  const room = rooms.find((r) => r.id === Number(id));

  if (!room)
    return (
      <Layout>
        <p>Quarto não encontrado.</p>
      </Layout>
    );

  return (
    <Layout>
      <h1>{room.name}</h1>
      <p>{room.description}</p>
      <p>
        <strong>R$ {room.price}</strong>
      </p>
      <button onClick={() => navigate("/booking-success")}>Reservar</button>
    </Layout>
  );
};

export default RoomDetails;
