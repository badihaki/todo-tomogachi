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

    const { user } = session;
    
    const usableUserData = user as IUser;
    // const userData = await prisma.user.findFirst();
    const userData = await prisma.user.findFirst({
      where:{
        email:usableUserData.email
      }
    })
    
    console.log("api/auth/user route got this data:");
    console.log(userData);
    
    const response = NextResponse.json(
      {
        success: true,
        data: userData,
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
