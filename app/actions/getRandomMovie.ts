import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prismadb from "@/app/lib/prismadb";
import getCurrentUser from "./getCurrentUser";
import { NextResponse } from "next/server";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getRandomMovie() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return randomMovies[0];
  } catch (error: any) {
    return null;
  }
}
