"use client";
import React from "react";
import Link from "next/link";
import { Layout, Menu } from "antd";
import {
  BarChartOutlined,
  SnippetsOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Logo from "./logo";

import LogoImage from "@/public/images/logo2.png";

interface SideBarProps {
  collapsed: boolean;
}

const SideBar = ({ collapsed }: SideBarProps) => {
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="p-3 h-screen overflow-auto hide-scrollbar !bg-[var(--sidebar-bg)] !text-[var(--sidebar-text)]"
    >
      <div
        className={`p-[4px] ${
          collapsed ? "mb-0" : "mb-10"
        } w-full h-[120px] sticky top-[4px]`}
      >
        <Logo logo={LogoImage} />
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["/admin"]}
        className="bg-transparent text-[inherit] !border-0"
        items={[
          {
            key: "/admin",
            icon: <BarChartOutlined />,
            label: <Link href="/admin">Dashboard</Link>,
          },
          {
            key: "/files",
            icon: <SnippetsOutlined />,
            label: <Link href="/admin/files">Files</Link>,
          },
          {
            key: "/user",
            icon: <UserOutlined />,
            label: <Link href="/admin/users">Users</Link>,
          },
        ]}
      />
    </Layout.Sider>
  );
};

export default SideBar;
