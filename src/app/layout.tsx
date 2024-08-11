import type { Metadata } from "next";
import "./globals.css";
import { monoRopeFont } from "../utils/font";

export const metadata: Metadata = {
  title: "Thence Assessment",
  description: "Thence Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monoRopeFont.className}>
        <main className="container mx-auto py-6 px-8">{children}</main>
      </body>
    </html>
  );
}
