import { dbConnect } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function POST(request: NextRequest) {
  return NextResponse.json({
    message: "users/register api accessed post method.",
  });
}
