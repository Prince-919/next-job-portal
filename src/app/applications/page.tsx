"use client";

import PageTitle from "@/components/PageTitle";
import { message, Table } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/loaderSlice";
import moment from "moment";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const { currentUser } = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  async function fetchApplications() {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(
        `/api/applications?user=${currentUser._id}`
      );
      setApplications(response.data.data);
    } catch (error: any) {
      message.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    fetchApplications();
  }, []);

  const columns = [
    {
      title: "Application Id",
      dataIndex: "_id",
    },
    {
      title: "Job Title",
      dataIndex: "job",
      render: (job: any) => job.title,
    },
    {
      title: "Company",
      dataIndex: "job",
      render: (job: any) => job.user.name,
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Applied On",
      dataIndex: "createdAt",
      render: (text: any) => moment(text).format("DD-MM-YYYY"),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle title="Applications" />
      </div>
      <div className="my-2">
        <Table columns={columns} dataSource={applications} />
      </div>
    </div>
  );
}
