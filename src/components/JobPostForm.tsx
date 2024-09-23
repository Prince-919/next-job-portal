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
          rules={[{ required: true, message: "Job title are description" }]}
        >
          <textarea />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="Type" name="jobType">
          <select>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
          </select>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="Location" name="location">
          <input type="text" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="Experience" name="experience">
          <input type="text" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="Work mode" name="workMode">
          <select>
            <option value="full-time">Remote</option>
            <option value="part-time">Office</option>
          </select>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="Salary from range" name="salaryFromRange">
          <input type="number" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label="Salary to range" name="salaryToRange">
          <input type="number" />
        </Form.Item>
      </Col>
    </Row>
  );
}
