"use client";
import EmployeeForm from "@/components/EmployeeForm";
import EmployerForm from "@/components/EmployerForm";
import { Form } from "antd";

import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state: any) => state.users);
  return (
    <div>
      <Form>
        {currentUser?.userType === "employer" ? (
          <EmployerForm />
        ) : (
          <EmployeeForm />
        )}
      </Form>
    </div>
  );
}
