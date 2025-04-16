import { useRooms } from "../hooks/useRooms";
import RoomCard from "../components/RoomCard";
import Layout from "../components/Layout";

const Rooms = () => {
  const { rooms, loading } = useRooms();

  return (
    <Layout>
      <h1>Quartos Disponíveis</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        rooms.map((room) => <RoomCard key={room.id} room={room} />)
      )}
    </Layout>
  );
};

export default Rooms;
