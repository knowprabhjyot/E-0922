import { Product } from "../types/types";

// Actions
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

// Action Creators Type (interfaces)
export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: Product;
}

export interface ClearCartAction {
  type: typeof CLEAR_CART;
}

export type CartActionTypes =
  | AddToCartAction
  | RemoveFromCartAction
  | ClearCartAction;

// Action Creators
export const addToCart = (product: Product): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeToCart = (product: Product): RemoveFromCartAction => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

export const clearCart = (): ClearCartAction => ({
  type: CLEAR_CART,
});
