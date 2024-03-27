import classes from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className="absolute top-0 right-0 mt-4 mr-4">
      <ul className="list-none">
        <li className={classes["nav-item"]}>Introduction</li>
        <li className={classes["nav-item"]}>Projects</li>
        <li className={classes["nav-item"]}>Blog</li>
        <li className={classes["nav-item"]}>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
