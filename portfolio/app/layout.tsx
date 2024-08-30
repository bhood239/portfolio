import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavBar from "./topNavBar";

const inter = Inter({ subsets: ["latin"] });

type metadata = {
  title:string,
  description:string
}

export const metadata: Metadata = {
  title: "Ben Hood",
  description: "Ben's portfolio site, built using typescript and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavBar/>
        {children}
      </body>
    </html>
  );
}
