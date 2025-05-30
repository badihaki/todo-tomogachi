/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/lib/util/prisma";
import { createSession } from "@/lib/util/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user === null) {
      throw new Error("User doesn't exist");
    }
    if (user?.password === password) {
      await createSession(user); // make sure the user is in session

      const response = NextResponse.json(
        {
          success: true,
          data: user,
        },
        {
          status: 200,
        }
      );

      return response;
    } else {
      throw new Error("Wrong password");
    }
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
