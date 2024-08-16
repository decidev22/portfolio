import type { Metadata } from "next";
// import { poppins } from "./fonts";
import "./globals.css";
import { Fragment } from "react";
import { poppins } from "./fonts";

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
          <main className={`${poppins.className}`}>{children}</main>
        </body>
      </html>
    </Fragment>
  );
}
