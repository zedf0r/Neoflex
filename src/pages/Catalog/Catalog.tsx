import { Card } from "@/shared";
import style from "./Catalog.module.scss";
import s852 from "@/assets/images/s852.png";
import airpods from "@/assets/images/airpods.png";
import boxAirpods from "@/assets/images/box_airpods.png";
import wirelessAirpods from "@/assets/images/wireless_airpods.png";
import gh4 from "@/assets/images/gh4.png";
import borofone from "@/assets/images/borofone.png";
import { v4 as uuidv4 } from "uuid";
import type { TypeCardProps } from "@/types/Card.type";
import { useCart } from "@/app/providers/cart/useCart";

const headphones: TypeCardProps[] = [
  {
    id: uuidv4(),
    img: s852,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    oldPrice: 3646,
  },
  {
    id: uuidv4(),
    img: airpods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: uuidv4(),
    img: boxAirpods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: uuidv4(),
    img: s852,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    oldPrice: 3646,
  },
  {
    id: uuidv4(),
    img: airpods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: uuidv4(),
    img: boxAirpods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
];

const wirelessHeadphones: TypeCardProps[] = [
  {
    id: uuidv4(),
    img: wirelessAirpods,
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    id: uuidv4(),
    img: gh4,
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    id: uuidv4(),
    img: borofone,
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
  },
];

const Catalog = () => {
  const { setCart } = useCart();

  const handleOnClick = (card: TypeCardProps) => {
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

  return (
    <section className={style.catalog}>
      <div>
        <h2 className={style.catalog__title}>Наушники</h2>
        <div className={style.headphones}>
          {headphones &&
            headphones.map((headphone) => {
              return (
                <Card
                  key={headphone.id}
                  card={headphone}
                  onClick={handleOnClick}
                />
              );
            })}
        </div>
      </div>
      <div>
        <h2 className={style.catalog__title}>Беспроводные наушники</h2>
        <div className={style.headphones}>
          {wirelessHeadphones &&
            wirelessHeadphones.map((headphone) => {
              return (
                <Card
                  key={headphone.id}
                  card={headphone}
                  onClick={handleOnClick}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
