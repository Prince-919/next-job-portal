"use client";

import { setLoading } from "@/redux/loaderSlice";
import { Button, message, Modal, Table } from "antd";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Applications({
  selectedJob,
  showApplications,
  setShowApplications,
}: {
  selectedJob: any;
  showApplications: any;
  setShowApplications: any;
}) {
  const [applications, setApplications] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  async function fetchApplications() {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(
        `/api/applications?job=${selectedJob._id}`
      );
      setApplications(response.data.data);
    } catch (error: any) {
      message.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function onStatusUpdate(applicationId: string, status: string) {
    try {
      dispatch(setLoading(true));
      const response = await axios.put(`/api/applications/${applicationId}`, {
        status,
      });
      message.success(response.data.message);
      fetchApplications();
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
      title: "Applicant",
      dataIndex: "user",
      render: (user: any) => user.name,
    },
    {
      title: "Email",
      dataIndex: "user",
      render: (user: any) => user.email,
    },
    {
      title: "Applied On",
      dataIndex: "createdAt",
      render: (text: any) => moment(text).format("DD-MM-YYYY"),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string, record: any) => (
        <select
          value={status}
          onChange={(e) => onStatusUpdate(record._id, e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="rejected">Rejected</option>
        </select>
      ),
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (applicationId: string, application: any) => (
        <Button
          onClick={() => router.push(`/userinfo/${application.user._id}`)}
        >
          View
        </Button>
      ),
    },
  ];
  return (
    <Modal
      title={`Applications for ${selectedJob.title}`}
      open={showApplications}
      onCancel={() => setShowApplications(false)}
      width={1000}
      closeIcon={false}
    >
      <div className="my-3">
        <Table columns={columns} dataSource={applications} />
      </div>
    </Modal>
  );
}
