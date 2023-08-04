import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prismadb from "@/app/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getMovies() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    const movies = await prismadb.movie.findMany();

    return movies;
  } catch (error: any) {
    return null;
  }
}
