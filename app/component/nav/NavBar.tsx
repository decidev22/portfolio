"use client";
import NavLink from "./NavLink";
import classes from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className="flex justify-end w-full top-0 p-3 sticky z-10 h-[55px] bg-black">
      {/* OLD NAV BAR Commented out */}
      <ul className="list-none">
        <NavLink href="/" title="Home" />
        <NavLink href="/projects" title="Projects" />
        <NavLink href="/blogs" title="Blog" />
        <NavLink href="/contact" title="Contact" />
      </ul>

      {/* New Nav Bar */}
    </nav>
  );
};

export default NavBar;
