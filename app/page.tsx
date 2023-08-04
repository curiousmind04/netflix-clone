import getMovies from "./actions/getMovies";
import getRandomMovie from "./actions/getRandomMovie";
import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

const Home = async () => {
  const randomMovie = await getRandomMovie();
  const movies = await getMovies();
  return (
    <>
      <Navbar />
      <Billboard randomMovie={randomMovie} />
      <div className="pb-40">
        <MovieList movies={movies} title="Trending Now" />
      </div>
    </>
  );
};

export default Home;
