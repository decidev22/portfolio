"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "./loading";
import NavBar from "./component/nav/NavBar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <div>New Portfolio</div>
    </main>
  );
}
