import { Link } from "react-router-dom";

const rooms = [
  { id: "1", name: "Quarto Luxo" },
  { id: "2", name: "Quarto Simples" },
  { id: "3", name: "Suíte Master" },
];

const Rooms = () => {
  return (
    <div>
      <h1>Quartos Disponíveis</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
