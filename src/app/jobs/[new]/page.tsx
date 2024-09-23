"use client";

import JobPostForm from "@/components/JobPostForm";
import PageTitle from "@/components/PageTitle";
import { setLoading } from "@/redux/loaderSlice";
import { Button, Form, message } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function NewJob() {
  const router = useRouter();
  const dispatch = useDispatch();

  async function submitHandler(values: any) {
    try {
      dispatch(setLoading(true));
      const response = await axios.post("/api/jobs", values);
      message.success(response.data.message);
      router.push("/jobs");
      dispatch(setLoading(false));
    } catch (error: any) {
      message.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle title="Post New Job" />
        <Button type="default" onClick={() => router.back()}>
          Back
        </Button>
      </div>
      <Form layout="vertical" onFinish={submitHandler}>
        <JobPostForm />
        <div className="flex justify-end items-center gap-3 my-3">
          <Button type="default" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Post Job
          </Button>
        </div>
      </Form>
    </div>
  );
}
