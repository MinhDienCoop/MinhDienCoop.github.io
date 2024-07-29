"use client";
import { useState } from "react";
import Link from "next/link";
import { Avatar, Button, Dropdown, Modal } from "antd";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { PATHS } from "@/app/utils/path";
import { getLocalStorage } from "@/app/libs";
import LoginFormAdmin from "../Sections/loginFormAdmin";
import RegisterForm from "../Sections/registerForm";

const Account = () => {
  const userInfo = getLocalStorage("user");
  const [openLoginForm, setOpenLoginForm] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
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
    <div>
      {userInfo ? (
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
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
      ) : (
        <Button
          type="text"
          className="p-0 h-auto"
          onClick={() => setOpenLoginForm(true)}
        >
          <Avatar
            size="large"
            className="bg-[var(--btn-bg)] text-[var(--btn-text)] hover:bg-[var(--btn-bg-hv)] hover:text-[var(--btn-text-hv)]"
          >
            <UserOutlined />
          </Avatar>
        </Button>
      )}

      <Modal
        title={!isRegister ? "Login" : "Register"}
        footer={false}
        open={openLoginForm}
        onCancel={() => setOpenLoginForm(false)}
      >
        {!isRegister ? (
          <>
            <LoginFormAdmin />
            <div className="text-center">
              <span className="mr-1">Don't have an account?</span>
              <Button
                type="link"
                className="p-0"
                onClick={() => setIsRegister(true)}
              >
                <strong>Sign Up</strong>
              </Button>
            </div>
          </>
        ) : (
          <>
            <RegisterForm />
            <div className="text-center">
              <span className="mr-1">Have an account?</span>
              <Button
                type="link"
                className="p-0"
                onClick={() => setIsRegister(false)}
              >
                <strong>Sign in now</strong>
              </Button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Account;
