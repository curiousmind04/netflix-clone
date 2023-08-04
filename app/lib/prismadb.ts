//have to do this because of NextJS hot reloading (otherwise there
// will be tons of Prisma Client instances running after code changes)

import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
