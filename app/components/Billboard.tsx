"use client";

import { Movie } from "@prisma/client";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import { useCallback } from "react";
import useInfoModal from "../hooks/useInfoModal";

interface BillBoardProps {
  randomMovie: Movie | null;
}

const Billboard: React.FC<BillBoardProps> = ({ randomMovie }) => {
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    openModal(randomMovie?.id as string);
  }, [randomMovie?.id, openModal]);

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        src={randomMovie?.videoUrl}
        poster={randomMovie?.thumbnailUrl}
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-[40%] xxs:top-[30%] ml-4 md:ml-16">
        <p className="text-white text-1xl sm:text-3xl md:text-5xl h-full w-[75%] xs:w-[65%] lg:text-6xl font-bold drop-shadow-xl">
          {randomMovie?.title}
        </p>
        <p className="text-white text-[8px] sm:text-[16px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl hidden xxs:block">
          {randomMovie?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={randomMovie?.id} />
          <button
            onClick={handleOpenModal}
            className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-3 md:px-4 w-auto text-sm lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
          >
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default Billboard;
