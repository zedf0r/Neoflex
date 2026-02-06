import type { TypeCardProps } from "@/types/Card.type";
import { createContext, type Dispatch, type SetStateAction } from "react";

type TypeCart = TypeCardProps & { quantity: number };

export type TypeCartContext = {
  cart: TypeCart[];
  setCart: Dispatch<SetStateAction<TypeCart[]>>;
  totalCount: number;
  totalSum: number;
};

export const CartContext = createContext<TypeCartContext | null>(null);
