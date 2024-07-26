"use client";
import { Avatar, Button, Dropdown, Layout } from "antd";
import type { MenuProps } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface ContentAdminProps {
  children: React.ReactNode;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const ContentAdmin = ({
  children,
  collapsed,
  setCollapsed,
}: ContentAdminProps) => {
  const items: MenuProps["items"] = [
    {
      key: "account",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Account
        </a>
      ),
    },
    {
      key: "logout",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Logout
        </a>
      ),
    },
  ];

  return (
    <Layout className="h-screen overflow-hidden">
      <Layout.Header className="bg-white w-full px-5 flex flex-wrap items-center justify-between">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="text-[16px]"
        />
        <Dropdown
          menu={{ items }}
          placement="bottomLeft"
          trigger={["click"]}
          className="cursor-pointer"
        >
          <Avatar
            size="large"
            className="bg-[var(--btn-bg)] text-[var(--btn-text)] hover:bg-[var(--btn-bg-hv)] hover:text-[var(--btn-text-hv)]"
          >
            <UserOutlined />
          </Avatar>
        </Dropdown>
      </Layout.Header>

      <Layout.Content className="mx-5 my-5 p-10 bg-white rounded-xl flex-1 overflow-auto hide-scrollbar">
        {children}
      </Layout.Content>
    </Layout>
  );
};

export default ContentAdmin;
