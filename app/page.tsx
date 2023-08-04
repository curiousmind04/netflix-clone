import getRandomMovie from "./actions/getRandomMovie";
import Billboard from "./components/Billboard";
import Navbar from "./components/Navbar";

const Home = async () => {
  const randomMovie = await getRandomMovie();
  return (
    <>
      <Navbar />
      <Billboard randomMovie={randomMovie} />
    </>
  );
};

export default Home;
