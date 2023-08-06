import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prismadb from "@/app/lib/prismadb";
// import getCurrentUser from "./getCurrentUser";

export async function getSession() {
  return await getServerSession(authOptions);
}

interface IParams {
  movieId?: string;
}

export default async function getMovieById(params: IParams) {
  try {
    const { movieId } = params;

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      return null;
    }

    return movie;
  } catch (error: any) {
    return null;
  }
}
