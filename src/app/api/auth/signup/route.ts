/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/lib/util/prisma";
import { createSession } from "@/lib/util/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("body:")
  console.log(body)
  const { email, password, username } = body;

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        username,
      },
    });
    
    await createSession(user);

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
