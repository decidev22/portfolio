"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./NavBar.module.css";
interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  const path = usePathname();
  return (
    <li
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : `${classes.link}`
      }
    >
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default NavLink;
