"use client";

import { Modal } from "antd";

export default function Applications({
  selectedJob,
  showApplications,
  setShowApplications,
}: {
  selectedJob: any;
  showApplications: boolean;
  setShowApplications: boolean;
}) {
  return (
    <Modal
      title="Applications"
      open={showApplications}
      onCancel={() => setShowApplications(false)}
    ></Modal>
  );
}
