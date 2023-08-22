"use client";

import { isEmpty } from "lodash";
import { Movie, User } from "@prisma/client";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: Movie[] | null;
  title: string;
  currentUser: User | null;
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  title,
  currentUser,
}) => {
  if (isEmpty(movies)) {
    return null;
  }

  return (
    <div className="px-4 lg:px-12 mt-4 space-y-8">
      <div className="max-w-[250px] xs:max-w-[500px] sm:max-w-full mx-auto">
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} data={movie} currentUser={currentUser} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
