"use client";

import PageTitle from "@/components/PageTitle";
import { Button, message, Table } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/loaderSlice";
import moment from "moment";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const { currentUser } = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  const router = useRouter();

  async function fetchJobs() {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/jobs?user=${currentUser._id}`);
      setJobs(response.data.data);
    } catch (error: any) {
      message.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function deleteJob(jobId: string) {
    try {
      dispatch(setLoading(true));
      const response = await axios.delete(`/api/jobs/${jobId}`);
      message.success(response.data.message);
      fetchJobs();
    } catch (error: any) {
      message.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Posted On",
      dataIndex: "createdAt",
      render: (text: any) => moment(text).format("DD-MM-YYYY HH:mm A"),
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
    },

    {
      title: "Work Mode",
      dataIndex: "workMode",
    },
    {
      title: "Experience",
      dataIndex: "experience",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: function (text: any, record: any) {
        return (
          <div className="flex gap-3 ">
            <i
              className="ri-delete-bin-line cursor-pointer delete-color"
              onClick={() => deleteJob(record._id)}
            ></i>
            <i
              className="ri-pencil-line cursor-pointer edit-color"
              onClick={() => router.push(`/jobs/edit/${record._id}`)}
            ></i>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle title="Jobs" />
        <Button type="primary" onClick={() => router.push("/jobs/new")}>
          New Job
        </Button>
      </div>
      <div className="my-2">
        <Table columns={columns} dataSource={jobs} />
      </div>
    </div>
  );
}
