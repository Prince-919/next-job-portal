"use client";

import PageTitle from "@/components/PageTitle";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Jobs() {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle title="Jobs" />
        <Button type="primary" onClick={() => router.push("/jobs/new")}>
          New Job
        </Button>
      </div>
    </div>
  );
}
