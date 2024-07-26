import { Playfair } from "next/font/google";

import "@/app/globals.css";
import AdminLayout from "@/app/components/Common/adminLayout";

const fontBase = Playfair({ subsets: ["latin", "vietnamese"] });

export const metadata = {
  title: "Mdc",
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
        className={`${fontBase.className} bg-[#f5f5f5] overflow-hidden`}
        suppressHydrationWarning={true}
      >
        <AdminLayout>{children}</AdminLayout>
      </body>
    </html>
  );
}
