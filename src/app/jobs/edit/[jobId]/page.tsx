"use client";

import JobPostForm from "@/components/JobPostForm";
import PageTitle from "@/components/PageTitle";
import { setLoading } from "@/redux/loaderSlice";
import { Button, Form, message } from "antd";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function EditJob() {
  const [jobData, setJobData] = useState<any>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const { jobId } = useParams();

  async function submitHandler(values: any) {
    try {
      values._id = jobId;
      dispatch(setLoading(true));
      const response = await axios.put(`/api/jobs/${jobId}`, values);
      message.success(response.data.message);
      router.push("/jobs");
      dispatch(setLoading(false));
    } catch (error: any) {
      message.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

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

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    jobData && (
      <div>
        <div className="flex justify-between items-center">
          <PageTitle title="Edit Job Post" />
          <Button type="default" onClick={() => router.back()}>
            Back
          </Button>
        </div>
        <Form
          layout="vertical"
          onFinish={submitHandler}
          initialValues={jobData}
        >
          <JobPostForm />
          <div className="flex justify-end items-center gap-3 my-3">
            <Button type="default" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Update Job
            </Button>
          </div>
        </Form>
      </div>
    )
  );
}
