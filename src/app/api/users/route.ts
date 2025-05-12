/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/lib/util/prisma";
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
  } catch (err:any) {
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
