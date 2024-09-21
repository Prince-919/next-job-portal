"use client";

import { Button, Form } from "antd";
import Link from "next/link";

export default function Login() {
  function submitHandler(values: any) {
    console.log("Login success!", values);
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
