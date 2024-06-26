"use client";
import NavLink from "./NavLink";
import Image from "next/image";
import { useRouter } from "next/navigation";
import classes from "./NavBar.module.css";
const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between w-full top-0 p-3 sticky z-10 h-[55px] bg-black">
      <div className="relative">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="z-20"
          onClick={() => router.push("/")}
        />
        <div className={`${classes.sun}  z-10`}> </div>
        <div className={`${classes.suntwo}  z-20`}> </div>
        <div className={`${classes.wavecontainer} -z-10`}> </div>
        <div className={`${classes.wave} -z-30`}> </div>
        <div className={`${classes["wavetwo"]} -z-20`}></div>
        <div className={`${classes["wavethree"]} -z-40`}></div>
      </div>

      <ul className="list-none">
        <NavLink href="/" title="Home" />
        <NavLink href="/projects" title="Projects" />
        <NavLink href="/blogs" title="Blog" />
        <NavLink href="/contact" title="Contact" />
      </ul>
    </nav>
  );
};

export default NavBar;
