import style from "./Header.module.scss";
import { CartIcon, FavoriteIcon } from "@/assets/icons";
import { Logo } from "..";
import { Link } from "react-router";
import { useCart } from "@/app/providers/cart/useCart";

export const Header = () => {
  const { totalCount } = useCart();

  const headerAction = [
    { to: "/", count: 2, icon: <FavoriteIcon className={style.favorite} /> },
    {
      to: "cart",
      count: totalCount,
      icon: <CartIcon className={style.cart} />,
    },
  ];

  return (
    <header className={style.header}>
      <Logo />
      <div className={style.header__actions}>
        {headerAction.map((action, index) => {
          return (
            <Link className={style.header__button} key={index} to={action.to}>
              {action.icon}
              {action.count >= 1 && (
                <span className={style.header__count}>{action.count}</span>
              )}
            </Link>
          );
        })}
      </div>
    </header>
  );
};
