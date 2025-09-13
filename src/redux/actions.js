import { ADD_TO_CART } from "./actionTypes";

export const addToCart = (newCartItem) => ({ type: ADD_TO_CART, newCartItem: newCartItem });