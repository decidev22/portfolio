"use client";
import { useEffect, useState } from "react";
import Loading from "./loading";
import NavBar from "./component/nav/NavBar";
import MainPage from "./component/ui/MainPage";

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
    <main className="flex min-h-screen flex-col items-center p-10 w-full">
      <NavBar />
      <MainPage />
    </main>
  );
}
