"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import SideBar from "@/app/components/Header/sidebar";
import ContentAdmin from "@/app/components/Sections/ContentAdmin";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <SideBar collapsed={collapsed} />
      <ContentAdmin
        children={children}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
    </Layout>
  );
};

export default AdminLayout;
