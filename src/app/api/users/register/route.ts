import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: "users/register api accessed get method.",
  });
}
export async function POST(request: NextRequest) {
  return NextResponse.json({
    message: "users/register api accessed post method.",
  });
}
export async function PUT(request: NextRequest) {
  return NextResponse.json({
    message: "users/register api accessed put method.",
  });
}
