"use client";
import NavLink from "./NavLink";
import classes from "./NavBar.module.css";

import SydneyOperaHouse from "../common_components/SydneyOperaHouse";

import SomeNews from "./SomeNews";

const NavBar = () => {
  return (
    <nav className="flex items-center w-full top-0 sticky z-50 h-[55px] bg-black">
      <div className="flex-1">
        <SomeNews
          news={["I'm open to new opportunities!", "Remote ANZ or Sydney NSW", "Open to: BackEnd", "Open to: Full-Stack"]}
          reactComponent={<SydneyOperaHouse />}
        />
      </div>
      <ul className="hidden lg:flex ml-auto list-none ">
        <NavLink href="/" title="Home" />
        <NavLink href="/products" title="Products" />
        <NavLink href="/blogs" title="Blog" />
        <NavLink href="/contact" title="Contact" />
      </ul>
      <button type="button" className="flex font-bold justify-end lg:hidden">
        <div className="grid grid-cols-2 grid-rows-2 text-center text-[12px] border border-1 border-white w-[35px] h-[35px]">
          <div className="flex items-center justify-center">M</div>
          <div className="flex items-center justify-center">E</div>
          <div className="flex items-center justify-center">N</div>
          <div className="flex items-center justify-center">U</div>
        </div>
      </button>
    </nav>
  );
};

export default NavBar;
