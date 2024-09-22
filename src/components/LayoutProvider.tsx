"use client";
import React from "react";
import { ConfigProvider } from "antd";
import { usePathname } from "next/navigation";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
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
          {pathname === "/login" || pathname === "/register" ? (
            <div>{children}</div>
          ) : (
            <div className="layout-parent">
              <div className="sidebar">
                <span>Sidebar</span>
              </div>
              <div className="body">{children}</div>
            </div>
          )}
        </ConfigProvider>
      </body>
    </html>
  );
}
