import { CartAside, CartItem } from "@/shared";
import style from "./Cart.module.scss";
import { useCart } from "@/app/providers/cart/useCart";

const Cart = () => {
  const { cart } = useCart();

  return (
    <section>
      <h2 className={style.cart__title}>Корзина</h2>
      <div className={style.cart__details}>
        <div className={style.cart__list}>
          {cart.map((card) => (
            <CartItem key={card.id} card={card} />
          ))}
        </div>
        <CartAside />
      </div>
    </section>
  );
};

export default Cart;
