// we have something that is coming from the api (THIS IS WHAT WE WANT TO STORE)
// DATA IS STILL LOADING!

import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  ProductActionTypes,
} from "../actions/productActions";
import { Product } from "../types/types";

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  isError: unknown;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  isError: null, // REDO
};

export function ProductReducer(
  state = initialState,
  action: ProductActionTypes
): ProductState {
  console.log("productreducer", action);

  // TYPE NARROWING
  switch (action.type) {
    case FETCH_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
}
