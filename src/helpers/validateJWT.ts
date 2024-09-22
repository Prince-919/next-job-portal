import { config } from "@/config/config";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function validateJWT(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      throw new Error("Token not found.");
    }
    const decoded: any = jwt.verify(token, config.jwtSecret as string);
    return decoded.userId;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
