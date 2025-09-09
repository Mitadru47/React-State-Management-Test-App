import { createContext } from "react";

export const CartContext = createContext({

  products: [],
  cartItems: [],

  addToCart: () => {}

});