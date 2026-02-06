import { Card } from "@/shared";
import style from "./Catalog.module.scss";
import s852 from "@/assets/images/s852.png";

const headphones = [
  {
    img: s852,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    oldPrice: 3646,
  },
  {
    img: s852,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    img: s852,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
];

const Catalog = () => {
  return (
    <section>
      <div className={style.catalog}>
        <h2 className={style.catalog__title}>Наушники</h2>
        <div className={style.headphones}>
          {headphones.map((headphone) => {
            return <Card card={headphone} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
