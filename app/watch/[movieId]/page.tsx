import getMovieById from "@/app/actions/getMovieById";
import WatchClient from "./WatchClient";

interface IParams {
  movieId?: string;
}

const Watch = async ({ params }: { params: IParams }) => {
  const movie = await getMovieById(params);

  return <WatchClient movie={movie} />;
};
export default Watch;
