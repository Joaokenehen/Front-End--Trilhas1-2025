import { useParams } from "react-router-dom";
import { useRooms } from "./useRooms";
import { Room } from "../types/room";

export const useRoom = (): Room | undefined => {
  const { id } = useParams();
  const { rooms } = useRooms();
  return rooms.find((room) => room.id === Number(id));
};
