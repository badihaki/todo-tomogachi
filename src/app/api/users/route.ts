/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/lib/util/prisma";
import { verifySession } from "@/lib/util/session";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await verifySession();
    console.log(session);
    if (session === null) {
      return NextResponse.json(
        { content: "No sessions, No Content" },
        { status: 200 }
      );
    }

    console.log("third step - found sessions yoooooo");
    const { data } = session;
    console.log(data);
    const user = await prisma.user.findFirst();

    const response = NextResponse.json(
      {
        success: true,
        data: user,
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
