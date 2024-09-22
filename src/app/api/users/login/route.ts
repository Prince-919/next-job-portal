import { dbConnect } from "@/config/db";
import { config } from "@/config/config";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const user = await User.findOne({ email: reqBody.email });
    if (!user) {
      throw new Error("User does not exists");
    }

    const isMatch = await bcrypt.compare(reqBody.password, reqBody.password);
    if (isMatch) {
      throw new Error("Incorrect email or password.");
    }
    const dataToBeSigned = {
      userId: user._id,
    };
    const token = jwt.sign(dataToBeSigned, config.jwtSecret as string, {
      expiresIn: "1d",
    });
    const response = NextResponse.json(
      { message: "Logged in successfully" },
      { status: 200 }
    );
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1000,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
