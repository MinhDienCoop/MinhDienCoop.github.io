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
      <ContentAdmin collapsed={collapsed} setCollapsed={setCollapsed}>
        {children}
      </ContentAdmin>
    </Layout>
  );
};

export default AdminLayout;
