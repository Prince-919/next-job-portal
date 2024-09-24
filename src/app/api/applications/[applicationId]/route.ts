import { dbConnect } from "@/config/db";
import { validateJWT } from "@/helpers/validateJWT";
import Application from "@/models/applicationModel";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function PUT(request: NextRequest, { params }: any) {
  try {
    await validateJWT(request);
    const reqBody = await request.json();
    const application = await Application.findByIdAndUpdate(
      params.applicationId,
      reqBody,
      {
        new: true,
        runValidators: true,
      }
    );
    return NextResponse.json({
      message: "Application status updated successfully",
      data: application,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
