"use client";

import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  async function getUser() {
    try {
      const response = await axios.get("/api/users/currentuser");
      setUser(response.data.data);
    } catch (error: any) {
      message.error(error.response.data.message || error.message);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Name : {user && user.name}</p>
      <p>Email : {user && user.email}</p>
    </div>
  );
}
