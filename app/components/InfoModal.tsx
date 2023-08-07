"use client";

import { Movie, User } from "@prisma/client";
import useInfoModal from "../hooks/useInfoModal";
import InfoModalClient from "./InfoModalClient";

interface InfoModalProps {
  movies: Movie[] | null;
  currentUser: User | null;
}

const InfoModal: React.FC<InfoModalProps> = ({ movies, currentUser }) => {
  const { isOpen, closeModal } = useInfoModal();

  return (
    <InfoModalClient
      currentUser={currentUser}
      movies={movies}
      visible={isOpen}
      onClose={closeModal}
    />
  );
};
export default InfoModal;
