import { Col, Row, Table } from "antd";
import React from "react";

export default function EmployeeInfo({ employeeInfo }: { employeeInfo: any }) {
  return (
    <Row>
      <Col span={12}>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span>Name</span>
            <span>{employeeInfo.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Email</span>
            <span>{employeeInfo.email}</span>
          </div>
          <div className="flex justify-between">
            <span>Phone</span>
            <span>{employeeInfo.phone}</span>
          </div>
        </div>
      </Col>
      <Col span={24} className="my-3">
        <strong>
          <h1 className="text-md">Carrier Objective</h1>
        </strong>
        <span>{employeeInfo.carrierObjective}</span>
      </Col>
      <Col span={24} className="my-3">
        <h1 className="text-md">
          <strong>Education</strong>
        </h1>
        <Table
          dataSource={employeeInfo.education}
          columns={[
            {
              title: "Qualification",
              dataIndex: "qualification",
            },
            {
              title: "Institution",
              dataIndex: "institution",
            },
            {
              title: "Percentage",
              dataIndex: "percentage",
            },
          ]}
          pagination={false}
        />
      </Col>
      <Col span={24} className="my-3">
        <h1 className="text-md">
          <strong>Skills</strong>
        </h1>
        <Table
          dataSource={employeeInfo.skills}
          columns={[
            {
              title: "Technology",
              dataIndex: "technology",
            },
            {
              title: "Rating (Out of 10)",
              dataIndex: "rating",
            },
          ]}
          pagination={false}
        />
      </Col>
      <Col span={24} className="my-3">
        <h1 className="text-md">
          <strong>Experience</strong>
        </h1>
        <Table
          dataSource={employeeInfo.experience}
          columns={[
            {
              title: "Company",
              dataIndex: "company",
            },
            {
              title: "Role",
              dataIndex: "role",
            },
            {
              title: "Period (from - to)",
              dataIndex: "period",
            },
          ]}
          pagination={false}
        />
      </Col>
    </Row>
  );
}
