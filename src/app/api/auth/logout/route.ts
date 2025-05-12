import { deleteSession } from "@/lib/util/session";
import { NextResponse } from "next/server";

export async function GET() {
  await deleteSession();
  return NextResponse.json(
    { content: "No sessions, No Content" },
    { status: 200 }
  );
}
