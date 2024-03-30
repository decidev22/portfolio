"use client";
import NavLink from "./NavLink";
import Image from "next/image";
import { useRouter } from "next/navigation";
const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between w-full top-0 p-3">
      <Image
        src="/logo.png"
        alt="Logo"
        width={40}
        height={40}
        className=""
        onClick={() => router.push("/")}
      />
      <ul className="list-none">
        <NavLink href="/introduction" title="Introduction" />
        <NavLink href="/projects" title="Projects" />
        <NavLink href="/blogs" title="Blog" />
        <NavLink href="/contact" title="Contact" />
      </ul>
    </nav>
  );
};

export default NavBar;
