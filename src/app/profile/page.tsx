"use client";
import EmployeeForm from "@/components/EmployeeForm";
import EmployerForm from "@/components/EmployerForm";
import PageTitle from "@/components/PageTitle";
import { setLoading } from "@/redux/loaderSlice";
import { setCurrentUser } from "@/redux/usersSlice";
import { Button, Form, message } from "antd";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  async function submitHandler(values: any) {
    try {
      values._id = currentUser._id;
      values.userType = currentUser.userType;
      dispatch(setLoading(true));
      const response = await axios.put("/api/users", values);
      message.success(response.data.message);
      dispatch(setCurrentUser(response.data.data));
    } catch (error: any) {
      message.error(error.response.data.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <div>
      <PageTitle title="Profile" />
      <Form
        layout="vertical"
        initialValues={currentUser}
        onFinish={submitHandler}
      >
        {currentUser?.userType === "employer" ? (
          <EmployerForm />
        ) : (
          <EmployeeForm />
        )}
        <div className="flex justify-end my-3">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
