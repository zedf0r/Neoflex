import { StarIcon } from "@/assets/icons";
import style from "./Card.module.scss";
import type { TypeCardProps } from "@/types/card.type";

export const Card = ({ card }: { card: TypeCardProps }) => {
  return (
    <article className={style.card}>
      <div className={style.card__img}>
        <img src={card.img} alt={card.title} />
      </div>
      <div className={style.card__info}>
        <div className={style.card__header}>
          <p className={style.card__title}>{card.title}</p>
          <div className={style.card__price}>
            <span className={style.card__price_new}>
              {card.price.toLocaleString()} ₽
            </span>
            {card.oldPrice && (
              <span className={style.card__price_old}>
                {card.oldPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
        </div>
        <div className={style.card__action}>
          <div className={style.card__rate}>
            <div className={style.rate__icon}>
              <StarIcon />
            </div>
            <span className={style.rate__text}>{card.rate}</span>
          </div>
          <button className={style.card__button} type="button">
            Купить
          </button>
        </div>
      </div>
    </article>
  );
};
