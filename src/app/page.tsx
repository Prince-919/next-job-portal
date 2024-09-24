"use client";

import Filters from "@/components/Filters";
import { setLoading } from "@/redux/loaderSlice";
import { Col, message, Row } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const [filters, setFilters] = useState({ searchText: "", location: "" });
  const dispatch = useDispatch();
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  async function fetchJobs() {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/jobs`, { params: filters });
      setJobs(response.data.data);
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
    <div>
      <Filters filters={filters} setFilters={setFilters} getData={fetchJobs} />
      <Row gutter={[16, 16]}>
        {jobs.map((job: any) => {
          return (
            <Col
              span={8}
              key={job._id}
              onClick={() => router.push(`/jobinfo/${job._id}`)}
            >
              <div className="new-card flex flex-col gap-2 py-3 cursor-pointer">
                <h1 className="text-md">{job.title}</h1>

                <div className="flex justify-between">
                  <span>Company</span>
                  <span>{job.user.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex justify-between">
                  <span>Salary</span>
                  <span>
                    {job.salaryFromRange} - {job.salaryToRange} LPA
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Work mode</span>
                  <span>{job.workMode}</span>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
