/* eslint-disable @typescript-eslint/no-explicit-any */
import IUser from "@/lib/interfaces/IUser";
import prisma from "@/lib/util/prisma";
import { verifySession } from "@/lib/util/session";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await verifySession();
    // console.log("api/auth/user route got this session:");
    // console.log(session);
    if (session === null) {
      return NextResponse.json(
        { content: "No sessions, No Content" },
        { status: 200 }
      );
    }

    const { user: userSession } = session;

    const usableUserData = userSession as IUser;
    // const userData = await prisma.user.findFirst();
    const user = await prisma.user.findFirst({
      where: {
        email: usableUserData.email,
      },
    });
    const todos = await prisma.todoList.findMany({
      where: {
        userId: user?.id,
      },
    });

    // console.log("api/auth/user route got this data:");
    // console.log(user);

    const response = NextResponse.json(
      {
        success: true,
        data: {
          user,
          todos,
        },
      },
      { status: 200 }
    );
    return response;
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}
