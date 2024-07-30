"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import LogoImageStatic from "@/public/images/logo.png";
import Link from "next/link";

interface LogoProps {
  logo?: any;
}

const Logo = ({ logo }: LogoProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const LogoImage = (
    <Image
      onClick={() => router.push("/")}
      src={logo ? logo : LogoImageStatic}
      alt="Mdc Logo"
      className="absolute w-full h-full object-contain"
      fill
    />
  );

  return (
    <>
      {pathName === "/admin" || pathName === "/" ? (
        <h1 className="relative w-full h-full">{LogoImage}</h1>
      ) : (
        <Link href={pathName} className="relative w-full h-full inline-block">
          {LogoImage}
        </Link>
      )}
    </>
  );
};

export default Logo;
