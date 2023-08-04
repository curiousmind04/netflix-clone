import bcrypt from "bcrypt";
// import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  try {
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email taken" }, { status: 422 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 400 }
    );
  }
}

//the code below is from the tutorial, the code above is my fix
//using what I learned from the Airbnb Clone

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     if (req.method !== "POST") {
//       return res.status(405).end();
//     }

//     const { email, name, password } = req.body;

//     const existingUser = await prismadb.user.findUnique({
//       where: {
//         email,
//       },
//     });

//     if (existingUser) {
//       return res.status(422).json({ error: "Email taken" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const user = await prismadb.user.create({
//       data: {
//         email,
//         name,
//         hashedPassword,
//         image: "",
//         emailVerified: new Date(),
//       },
//     });

//     return res.status(200).json(user);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ error: `Something went wrong: ${error}` });
//   }
// }
