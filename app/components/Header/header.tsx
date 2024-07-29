"use client";
import { Layout } from "antd";

import Logo from "@/app/components/Header/logo";
import MainMenu from "@/app/components/Header/mainMenu";
import HeaderTools from "@/app/components/Header/headerTools";

const Header = () => {
  return (
    <Layout.Header style={{ display: "flex", alignItems: "center" }}>
      <div className="relative w-[100px] min-w-[50px] h-[50px] px-3 mr-[24px] bg-[rgba(225,_225,_225,_0.2)] rounded-[6px] overflow-hidden">
        <Logo />
      </div>

      <MainMenu />
      <HeaderTools />
    </Layout.Header>
  );
};

export default Header;
