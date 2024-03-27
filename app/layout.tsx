import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andy's Portfolio",
  description: "Andy Baeck's Software Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <html>
        <body>
          <main className={inter.className}>{children}</main>
        </body>
      </html>
    </Fragment>
  );
}
