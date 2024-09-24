"use client";

import EmployeeInfo from "@/components/EmployeeInfo";
import EmployerInfo from "@/components/EmployerInfo";
import PageTitle from "@/components/PageTitle";
import { setLoading } from "@/redux/loaderSlice";
import { message } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function UserInfo() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const dispatch = useDispatch();

  const { userId } = useParams();

  async function fetchUserInfo() {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/users/${userId}`);
      setUserInfo(response.data.data);
      dispatch(setLoading(false));
    } catch (error: any) {
      message.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    userInfo && (
      <div>
        <PageTitle
          title={`${
            userInfo.userType === "employer" ? "Employer" : "Employee"
          } Info`}
        />
        {userInfo.userType === "employer" ? (
          <EmployerInfo employerInfo={userInfo} />
        ) : (
          <EmployeeInfo employeeInfo={userInfo} />
        )}
      </div>
    )
  );
}
