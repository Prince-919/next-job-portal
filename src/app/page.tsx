"use client";

import { Button } from "antd";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={() => alert("Hello")} type="primary">
        Primary Button
      </Button>
    </div>
  );
}
