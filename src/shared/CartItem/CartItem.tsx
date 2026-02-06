import type { TypeCardProps } from "@/types/card.type";
import style from "./CartItem.module.scss";
import { MinusIcon, PlusIcon } from "@/assets/icons";

export const CartItem = ({ card }: { card: TypeCardProps }) => {
  return (
    <article className={style.item}>
      <div className={style.item__info}>
        <div className={style.item__img}>
          <img src={card.img} alt={card.title} />
        </div>
        <div>
          <p className={style.item__title}>{card.title}</p>
          <span className={style.item__price}>
            {card.price.toLocaleString()} ₽
          </span>
        </div>
      </div>
      <div className={style.item__controls}>
        <div className={style.item__quantity}>
          <div className={style.item__quantityButton}>
            <MinusIcon />
          </div>
          <span className={style.item__quantityValue}>1</span>
          <div className={style.item__quantityButton}>
            <PlusIcon />
          </div>
        </div>
        <div className={style.item__totalPrice}>
          {card.price.toLocaleString()} ₽
        </div>
      </div>
    </article>
  );
};
