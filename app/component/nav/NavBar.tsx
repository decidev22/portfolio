import classes from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className="w-full top-0 p-3">
      <ul className="flex list-none justify-end">
        <li className={classes["nav-item"]}>Introduction</li>
        <li className={classes["nav-item"]}>Projects</li>
        <li className={classes["nav-item"]}>Blog</li>
        <li className={classes["nav-item"]}>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
