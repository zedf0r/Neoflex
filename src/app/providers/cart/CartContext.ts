import type { TypeCart } from "@/types/Card.type";
import { createContext, type Dispatch, type SetStateAction } from "react";

export type TypeCartContext = {
  cart: TypeCart[];
  setCart: Dispatch<SetStateAction<TypeCart[]>>;
  totalCount: number;
  totalSum: number;
};

export const CartContext = createContext<TypeCartContext | null>(null);
