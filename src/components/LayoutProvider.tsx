"use client";
import React from "react";
import { ConfigProvider } from "antd";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#24D671",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
