import { CartAside, CartItem } from "@/shared";
import style from "./Cart.module.scss";
import wirelessAirpods from "@/assets/images/wireless_airpods.png";

const Cart = () => {
  const item = {
    img: wirelessAirpods,
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  };

  return (
    <section>
      <h2 className={style.cart__title}>Корзина</h2>
      <div className={style.cart__details}>
        <CartItem card={item} />
        <CartAside price={1231} />
      </div>
    </section>
  );
};

export default Cart;
