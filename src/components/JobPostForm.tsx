"use client";

import { Col, Form, Row } from "antd";

export default function JobPostForm() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Job title are required" }]}
        >
          <input type="text" />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Description are required" }]}
        >
          <textarea />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Type"
          name="jobType"
          rules={[{ required: true, message: "Type are required" }]}
        >
          <select>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
          </select>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Location are required" }]}
        >
          <input type="text" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Experience"
          name="experience"
          rules={[{ required: true, message: "Experience are required" }]}
        >
          <input type="text" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Work mode"
          name="workMode"
          rules={[{ required: true, message: "Work mode are required" }]}
        >
          <select>
            <option value="remote">Remote</option>
            <option value="office">Office</option>
          </select>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Salary from range"
          name="salaryFromRange"
          rules={[
            { required: true, message: "Salary from range are required" },
          ]}
        >
          <input type="number" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Salary to range"
          name="salaryToRange"
          rules={[{ required: true, message: "Salary to range are required" }]}
        >
          <input type="number" />
        </Form.Item>
      </Col>
    </Row>
  );
}
