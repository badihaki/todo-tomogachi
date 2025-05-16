/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/lib/util/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  //   const { body } = await req.json();
  const body = await req.json();
  //   console.log("body:");
  //   console.log(body);
  //   console.log("end body^^^^^^^^^^^^^^^^^^^^^^^^^");
  const { newTodoList, user } = body;

  try{
      const todoList = await prisma.todoList.create({
        data: {
          title: newTodoList.title,
          userId: user.id,
        },
      });

      // response below
      return NextResponse.json(
        {
          success: true,
          data: {
            todoList: todoList
          },
        },
        { status: 200 }
      );
  }
  catch(err:any){
    console.log(err);
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
