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
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} data={movie} currentUser={currentUser} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
