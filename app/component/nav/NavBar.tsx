"use client";
import NavLink from "./NavLink";
import classes from "./NavBar.module.css";

import SomeNews from "./SomeNews";

const NavBar = () => {
  return (
    <nav className="flex items-center w-full top-0 p-5 sticky z-50 h-[55px] bg-black">
      <div className="flex">
        <SomeNews news={["I'm open for new opportunities!", "Remote ANZ or Sydney NSW"]} />
      </div>
      <ul className="flex ml-auto list-none">
        <NavLink href="/" title="Home" />
        <NavLink href="/products" title="Products" />
        <NavLink href="/blogs" title="Blog" />
        <NavLink href="/contact" title="Contact" />
      </ul>
    </nav>
  );
};

export default NavBar;
