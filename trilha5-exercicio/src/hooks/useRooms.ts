import { useEffect, useState } from "react";
import { Room } from "../types/room";

export const useRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRooms([
        {
          id: 1,
          name: "Suíte Luxo",
          description: "Vista para o mar",
          price: 400,
        },
        { id: 2, name: "Standard", description: "Cama queen", price: 200 },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return { rooms, loading };
};
