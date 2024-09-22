"use client";

import { Button, Form, message, Radio } from "antd";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/loaderSlice";

export default function Register() {
  const dispatch = useDispatch();
  async function submitHandler(values: any) {
    try {
      dispatch(setLoading(true));
      const response = await axios.post("/api/users/register", values);
      message.success(response.data.message);
      dispatch(setLoading(false));
    } catch (error: any) {
      message.error(error.response.data.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <div className="card p-7 w-450">
        <h1 className="text-xl">Sign up</h1>
        <hr />
        <Form
          onFinish={submitHandler}
          layout="vertical"
          className="flex flex-col gap-5"
        >
          <Form.Item name="userType">
            <Radio.Group>
              <Radio value="employer">Employer</Radio>
              <Radio value="employee">Employee</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name" name="name">
            <input type="text" placeholder="Name" className="input" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email" placeholder="Email Address" className="input" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" placeholder="Password" className="input" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign up
          </Button>
          <p>
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
