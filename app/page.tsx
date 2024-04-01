"use client";
import { useEffect, useState } from "react";
import Loading from "./loading";
import NavBar from "./component/nav/NavBar";
import MainPage from "./component/ui/MainPage";
import MainBottom from "./component/pages/mainpageComponent/Main_Bottom";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(!localStorage.getItem("isLoading"));
    if (isLoading) {
      localStorage.setItem("isLoading", `${Date.now()}`);
      const timeOut = setTimeout(() => {
        const storeIsLoading = localStorage.getItem("isLoading");
        const now = Date.now();
        if (!storeIsLoading) {
          setIsLoading(true);
          localStorage.setItem("isLoading", `${now}`);
        } else {
          setIsLoading(false);
        }
      }, 8000);
      return () => clearTimeout(timeOut);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <NavBar />
      <MainPage />
      <MainBottom />
    </main>
  );
}
