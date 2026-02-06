import type { TypeCardProps } from "@/types/Card.type";
import style from "./CartItem.module.scss";
import { MinusIcon, PlusIcon, TrashIcon } from "@/assets/icons";
import { useCart } from "@/app/providers/cart/useCart";

type TypeCart = TypeCardProps & { quantity: number };

export const CartItem = ({ card }: { card: TypeCart }) => {
  const { cart, setCart } = useCart();

  const handleOnInc = () => {
    setCart((prevState) => {
      const existCard = prevState.find((item) => item.id === card.id);
      if (existCard) {
        return prevState.map((item) =>
          item.id === card.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        return [...prevState, { ...card, quantity: 1 }];
      }
    });
  };

  const handleOnDec = () => {
    setCart((prevState) => {
      return prevState.map((item) =>
        item.id === card.id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            }
          : item,
      );
    });
  };

  const handleDelete = () => {
    setCart(cart.filter((item) => item.id !== card.id));
  };

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
          <div className={style.item__quantityButton} onClick={handleOnDec}>
            <MinusIcon />
          </div>
          <span className={style.item__quantityValue}>{card.quantity}</span>
          <div className={style.item__quantityButton} onClick={handleOnInc}>
            <PlusIcon />
          </div>
        </div>
        <div className={style.item__totalPrice}>
          {(card.price * card.quantity).toLocaleString()} ₽
        </div>
      </div>
      <div className={style.item__delete} onClick={handleDelete}>
        <TrashIcon />
      </div>
    </article>
  );
};
