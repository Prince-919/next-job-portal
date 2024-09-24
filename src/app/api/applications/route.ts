import { dbConnect } from "@/config/db";
import { validateJWT } from "@/helpers/validateJWT";
import Application from "@/models/applicationModel";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

// Create a new job
export async function POST(request: NextRequest) {
  try {
    await validateJWT(request);
    const reqBody = await request.json();
    const application = await Application.create(reqBody);
    return NextResponse.json({
      message: "You have successfully applied for this job",
      data: application,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Get all jobs post
export async function GET(request: NextRequest) {
  try {
    await validateJWT(request);
    const { searchParams } = new URL(request.url);
    const user = searchParams.get("user");
    const job = searchParams.get("job");
    const filtersObject: any = {};
    if (user) {
      filtersObject.user = user;
    }
    if (job) {
      filtersObject.job = job;
    }
    const applications = await Application.find(filtersObject)
      .populate("user")
      .populate({
        path: "job",
        populate: { path: "user" },
      });
    return NextResponse.json({
      message: "Applications fetched successfully",
      data: applications,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
