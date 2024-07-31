"use client";
import { Layout } from "antd";

import Logo from "@/app/components/Header/logo";
import MainMenu from "@/app/components/Header/mainMenu";
import HeaderTools from "@/app/components/Header/headerTools";

const Header = () => {
  return (
    <header className="shadow fixed top-5 left-5 right-5 z-10 bg-white rounded-lg py-2">
      <div className="container">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-[100px] min-w-[50px] h-[50px]">
            <Logo />
          </div>
          <div className="flex-1">
            <MainMenu />
          </div>
          <div>
            <HeaderTools />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
