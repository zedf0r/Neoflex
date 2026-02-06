import { useEffect, useState, type ReactNode } from "react";
import type { TypeCardProps } from "@/types/Card.type";
import { CartContext } from "@/app/providers/cart/CartContext";

type TypeCart = TypeCardProps & { quantity: number };

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<TypeCart[]>(() => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalSum = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider value={{ cart, setCart, totalCount, totalSum }}>
      {children}
    </CartContext.Provider>
  );
};
