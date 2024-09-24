"use client";
import { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { setLoading } from "@/redux/loaderSlice";
import { Button, Col, message, Row } from "antd";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const { currentUser } = useSelector((state: any) => state.users);
  const [jobData, setJobData] = useState<any>(null);
  const [applications, setApplications] = useState<any[]>([]);
  const dispatch = useDispatch();
  const { jobId } = useParams();
  const router = useRouter();

  async function fetchJobs() {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/jobs/${jobId}`);
      setJobData(response.data.data);
    } catch (error: any) {
      message.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
  async function fetchApplications() {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(
        `/api/applications?job=${jobId}&user=${currentUser._id}`
      );
      setApplications(response.data.data);
    } catch (error: any) {
      message.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    fetchJobs();
    fetchApplications();
  }, []);

  async function onApply() {
    try {
      dispatch(setLoading(true));
      const response = await axios.post("/api/applications", {
        job: jobData._id,
        user: currentUser._id,
        status: "pending",
      });
      message.success(response.data.message);
    } catch (error: any) {
      message.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    jobData && (
      <div>
        <PageTitle title={jobData.title} />
        <Row gutter={[16, 16]} className="gap-3">
          <Col span={12} className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span>Company</span>
              <span>{jobData.user.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Location</span>
              <span>{jobData.location}</span>
            </div>
            <div className="flex justify-between">
              <span>Salary</span>
              <span>
                {jobData.salaryFromRange} - {jobData.salaryToRange} LPA
              </span>
            </div>
            <div className="flex justify-between">
              <span>Work mode</span>
              <span>{jobData.workMode}</span>
            </div>
            <div className="flex justify-between">
              <span>Job type</span>
              <span>{jobData.jobType}</span>
            </div>
            <div className="flex justify-between">
              <span>Experience</span>
              <span>{jobData.experience} years</span>
            </div>
          </Col>
          <Col span={24} className="flex flex-col gap-2">
            <h1 className="text-md">Job Description</h1>
            <span className="text-justify">{jobData.description}</span>
            {applications.length > 0 && (
              <span className="my-3 applied p-3">
                You have already applied for this job, Please wait for the
                employer to respond.
              </span>
            )}
            <div className="flex justify-end gap-3 my-3">
              <Button type="default" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button
                disabled={applications.length > 0}
                type="primary"
                onClick={onApply}
              >
                Apply
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  );
}
