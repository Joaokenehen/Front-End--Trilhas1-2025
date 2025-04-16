import { Room } from "../types/room";
import { Link } from "react-router-dom";

const RoomCard = ({ room }: { room: Room }) => (
  <div style={{ border: "1px solid #ccc", padding: 16, margin: 16 }}>
    <h3>{room.name}</h3>
    <p>{room.description}</p>
    <p>
      <strong>R$ {room.price}</strong>
    </p>
    <Link to={`/room/${room.id}`}>Ver detalhes</Link>
  </div>
);

export default RoomCard;
