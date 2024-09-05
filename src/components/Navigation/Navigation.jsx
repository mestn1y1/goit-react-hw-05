import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getClassName = (props) => {
  return clsx(css.link, props.isActive && css.isActive);
};

export default function Navigation() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/" className={getClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={getClassName}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
