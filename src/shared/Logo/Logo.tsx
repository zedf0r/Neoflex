import { Link } from "react-router";
import style from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link className={style.header__logo} to="/">
      qpick
    </Link>
  );
};
