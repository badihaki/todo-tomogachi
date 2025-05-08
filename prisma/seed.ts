import { Prisma, PrismaClient } from "../app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

const userData: Prisma.UserCreateInput[] = [
  {
    username: "testX",
    email: "textX@todotomo.com",
    password: "abc123",
  },
];

export async function main() {
  for (const user of userData) {
    await prisma.user.create({ data: user });
  }
}

main();