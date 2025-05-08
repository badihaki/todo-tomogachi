import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await prisma.user.findFirst();
    const response = NextResponse.json(
      {
        success: true,
        data: user,
      },
      { status: 200 }
    );
    return response;
  } catch (err:unknown) {
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
