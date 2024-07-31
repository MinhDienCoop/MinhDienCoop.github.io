"use client";
import { useState } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";

const MainMenu = () => {
  const [current, setCurrent] = useState("home");
  const items: MenuProps["items"] = [
    {
      key: "home",
      label: <Link href="/">Home</Link>,
    },
    {
      key: "our-work",
      label: <Link href="/our-work">Our work</Link>,
    },
    {
      key: "about-us",
      label: <Link href="/about-us">About us</Link>,
    },
    {
      key: "contact",
      label: <Link href="/contact">Contact</Link>,
    },
  ];

  const handleChangeActive: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      theme="light"
      mode="horizontal"
      selectedKeys={[current]}
      items={items}
      onClick={handleChangeActive}
      className="justify-center shadow-none border-none bg-transparent"
    />
  );
};

export default MainMenu;
