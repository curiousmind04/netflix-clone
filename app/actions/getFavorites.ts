import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prismadb from "@/app/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getFavorites() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser.favoriteIds,
        },
      },
    });

    return favoriteMovies;
  } catch (error: any) {
    return null;
  }
}
