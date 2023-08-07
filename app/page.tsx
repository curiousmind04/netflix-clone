import getCurrentUser from "./actions/getCurrentUser";
import getFavorites from "./actions/getFavorites";
import getMovies from "./actions/getMovies";
import getRandomMovie from "./actions/getRandomMovie";
import Billboard from "./components/Billboard";
import InfoModal from "./components/InfoModal";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

const Home = async () => {
  const randomMovie = await getRandomMovie();
  const movies = await getMovies();
  const favorites = await getFavorites();
  const currentUser = await getCurrentUser();

  return (
    <div>
      <InfoModal movies={movies} currentUser={currentUser} />
      <Navbar currentUser={currentUser} />
      <Billboard randomMovie={randomMovie} />
      <div className="pb-40">
        <MovieList
          movies={movies}
          title="Trending Now"
          currentUser={currentUser}
        />
        <MovieList
          movies={favorites}
          title="My List"
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};

export default Home;
