import { Card } from "@/shared";
import style from "./Catalog.module.scss";
import s852 from "@/assets/images/s852.png";
import airpods from "@/assets/images/airpods.png";
import boxAirpods from "@/assets/images/box_airpods.png";
import wirelessAirpods from "@/assets/images/wireless_airpods.png";
import gh4 from "@/assets/images/gh4.png";
import borofone from "@/assets/images/borofone.png";

const headphones = [
  {
    img: s852,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    oldPrice: 3646,
  },
  {
    img: airpods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    img: boxAirpods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    img: s852,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    oldPrice: 3646,
  },
  {
    img: airpods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    img: boxAirpods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
];

const wirelessHeadphones = [
  {
    img: wirelessAirpods,
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    img: gh4,
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    img: borofone,
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
  },
];

const Catalog = () => {
  return (
    <section className={style.catalog}>
      <div>
        <h2 className={style.catalog__title}>Наушники</h2>
        <div className={style.headphones}>
          {headphones &&
            headphones.map((headphone, index) => {
              return <Card key={index} card={headphone} />;
            })}
        </div>
      </div>
      <div>
        <h2 className={style.catalog__title}>Беспроводные наушники</h2>
        <div className={style.headphones}>
          {wirelessHeadphones &&
            wirelessHeadphones.map((headphone, index) => {
              return <Card key={index} card={headphone} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
