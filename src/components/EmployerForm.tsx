"use client";

import { Row, Col, Form } from "antd";

export default function EmployerForm() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item label="Name" name="name">
            <input type="text" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Email" name="email">
            <input type="email" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Phone number" name="phone">
            <input type="text" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Establishment year" name="establishmentYear">
            <input type="number" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Website" name="website">
            <input type="text" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="No of employees" name="companySize">
            <input type="number" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Address" name="address">
            <textarea />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}
