import { dbConnect } from "@/config/db";
import { validateJWT } from "@/helpers/validateJWT";
import Job from "@/models/jobModel";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

// Create a new job
export async function POST(request: NextRequest) {
  try {
    const userId = await validateJWT(request);
    const reqBody = await request.json();
    const job = await Job.create({ ...reqBody, user: userId });
    return NextResponse.json({
      message: "Job posted successfully",
      data: job,
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
    const filtersObject: any = {};
    if (user) {
      filtersObject.user = user;
    }
    const jobs = await Job.find(filtersObject).populate("user");
    return NextResponse.json({
      message: "Jobs fetched successfully",
      data: jobs,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
