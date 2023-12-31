"use client";

import { Movie, User } from "@prisma/client";
import { useState, useEffect, useCallback } from "react";
import useInfoModal from "../hooks/useInfoModal";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";

interface InfoModalClientProps {
  visible?: boolean;
  onClose: any;
  movies: Movie[] | null;
  currentUser: User | null;
}

const InfoModalClient: React.FC<InfoModalClientProps> = ({
  visible,
  movies,
  currentUser,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(!!visible);

  const { movieId } = useInfoModal();

  const movie = movies?.find((movie) => movie.id === (movieId as string));

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex items-center overflow-x-hidden overflow-y-auto fixed top-0 right-0 w-full h-full">
      <div className="relative w-[95%] mx-auto max-w-3xl rounded-md my-8 h-fit overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-auto">
            <video
              src={movie?.videoUrl}
              poster={movie?.thumbnailUrl}
              autoPlay
              muted
              loop
              className="w-full brightness-[60%] object-cover h-[12vw] min-h-[240px]"
            ></video>
            <div
              onClick={handleClose}
              className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <AiOutlineClose className="text-white" size={20} />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-lg xs:text-xl sm:text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {movie?.title}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <PlayButton movieId={movie?.id} />
                <FavoriteButton movieId={movie?.id} currentUser={currentUser} />
              </div>
            </div>
          </div>
          <div className="px-6 sm:px-12 py-8">
            <p className="text-green-400 font-semibold text-sm sm:text-lg">
              New
            </p>
            <p className="text-white text-sm sm:text-lg">{movie?.duration}</p>
            <p className="text-white text-sm sm:text-lg">{movie?.genre}</p>
            <p className="text-white text-sm sm:text-lg">
              {movie?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoModalClient;
