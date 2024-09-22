"use client";
import React, { useState } from "react";
import { ConfigProvider } from "antd";
import { usePathname } from "next/navigation";
import { MENUS } from "@/constants/data";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
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
                <div className="logo">
                  {isSidebarExpanded && <h1 className="logo">APS Jobs</h1>}
                  {!isSidebarExpanded && (
                    <i
                      className="ri-menu-line"
                      onClick={() => setIsSidebarExpanded((prev) => !prev)}
                    ></i>
                  )}
                  {isSidebarExpanded && (
                    <i
                      className="ri-close-line"
                      onClick={() => setIsSidebarExpanded((prev) => !prev)}
                    ></i>
                  )}
                </div>
                <div className="menus">
                  {MENUS.map((menu, index) => {
                    const isActive = pathname === menu.path;
                    return (
                      <div
                        className={`menu ${isActive ? "active-menu" : ""}`}
                        key={index}
                        style={{
                          justifyContent: isSidebarExpanded
                            ? "flex-start"
                            : "center",
                        }}
                      >
                        <i className={menu.icon}></i>
                        <span>{isSidebarExpanded && menu.name}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="user-info">
                  {isSidebarExpanded && (
                    <div className="flex flex-col">
                      <span>User name </span>
                      <span>User email</span>
                    </div>
                  )}
                  <i className="ri-logout-box-r-line"></i>
                </div>
              </div>
              <div className="body">{children}</div>
            </div>
          )}
        </ConfigProvider>
      </body>
    </html>
  );
}
