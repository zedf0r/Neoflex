export type TypeCardProps = {
  id: string;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
};

export type TypeCart = TypeCardProps & { quantity: number };
