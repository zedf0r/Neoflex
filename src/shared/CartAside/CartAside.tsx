import { useCart } from "@/app/providers/cart/useCart";
import style from "./CartAside.module.scss";

export const CartAside = () => {
  const { totalSum } = useCart();

  return (
    <aside className={style.aside}>
      <div className={style.aside__total}>
        <p>Итого</p>
        <span>₽ {totalSum.toLocaleString()}</span>
      </div>
      <button className={style.aside__button} type="button">
        Перейти к оформлению
      </button>
    </aside>
  );
};
