"use client";
import NavLink from "./NavLink";
import classes from "./NavBar.module.css";

import SydneyOperaHouse from "../common_components/SydneyOperaHouse";

import SomeNews from "./SomeNews";

const NavBar = () => {
  return (
    <nav className="flex items-center w-full top-0 sticky z-50 h-[55px] bg-black">
      <div className="flex">
        <SomeNews news={["I'm open for new opportunities!", "Remote ANZ or Sydney NSW"]} reactComponent={<SydneyOperaHouse />} />
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
