import { Nunito } from "next/font/google";

import "@/app/globals.css";

const fontBase = Nunito({ subsets: ["latin", "vietnamese"] });

export const metadata = {
  title: "Login - Mdc Admin ",
  description: "Generated by create Mdc Team",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fontBase.className} bg-[#f5f5f5]`}
        suppressHydrationWarning={true}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
