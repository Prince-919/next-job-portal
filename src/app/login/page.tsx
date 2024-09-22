"use client";

import { setLoading } from "@/redux/loaderSlice";
import { Button, Form, message, Radio } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  async function submitHandler(values: any) {
    try {
      dispatch(setLoading(true));
      const response = await axios.post("/api/users/login", values);
      message.success(response.data.message);
      dispatch(setLoading(false));
      router.push("/");
    } catch (error: any) {
      message.error(error.response.data.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <div className="card p-7 w-450">
        <h1 className="text-xl">Login</h1>
        <hr />
        <Form
          onFinish={submitHandler}
          layout="vertical"
          className="flex flex-col gap-5"
        >
          <Form.Item label="Email" name="email">
            <input type="email" placeholder="Email Address" className="input" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" placeholder="Password" className="input" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
          <p>
            Don&apos;t have an account? <Link href="/register">Sign up</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
