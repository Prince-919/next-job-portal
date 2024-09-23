"use client";
import EmployeeForm from "@/components/EmployeeForm";
import EmployerForm from "@/components/EmployerForm";
import PageTitle from "@/components/PageTitle";
import { Button, Form } from "antd";

import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state: any) => state.users);
  return (
    <div>
      <PageTitle title="Profile" />
      <Form layout="vertical">
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
