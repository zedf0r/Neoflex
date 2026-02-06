import style from "./Header.module.scss";
import { CartIcon, FavoriteIcon } from "@/assets/icons";
import { Logo } from "..";

export const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <div className={style.header__action}>
        <div className={style.action__button}>
          <div className={style.favorite}>
            <FavoriteIcon />
          </div>
          <p className={style.action__count}>1</p>
        </div>
        <div className={style.action__button}>
          <div className={style.cart}>
            <CartIcon />
          </div>
          <p className={style.action__count}>2</p>
        </div>
      </div>
    </header>
  );
};
