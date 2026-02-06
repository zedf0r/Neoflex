import style from "./CartAside.module.scss";

export const CartAside = ({ price }: { price: number }) => {
  return (
    <aside className={style.aside}>
      <div className={style.aside__total}>
        <p>Итого</p>
        <span>₽ {price.toLocaleString()}</span>
      </div>
      <button className={style.aside__button} type="button">
        Перейти к оформлению
      </button>
    </aside>
  );
};
