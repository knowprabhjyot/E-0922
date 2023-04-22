import axios from "axios";
import { Dispatch } from "react";
import { Product } from "../types/types";

// Actions
export const FETCH_PRODUCT_START = "FETCH_PRODUCT_START";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";

// Interfaces

export interface FetchProductStartAction {
  type: typeof FETCH_PRODUCT_START;
}

export interface FetchProductFailureAction {
  type: typeof FETCH_PRODUCT_FAILURE;
  payload: string;
}

export interface FetchProductSuccessAction {
  type: typeof FETCH_PRODUCT_SUCCESS;
  payload: Product[];
}

export type ProductActionTypes =
  | FetchProductStartAction
  | FetchProductSuccessAction
  | FetchProductFailureAction;

// Action creators
export const fetchProductStart = (): FetchProductStartAction => ({
  type: FETCH_PRODUCT_START,
});

export const fetchProductSuccess = (
  data: Product[]
): FetchProductSuccessAction => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: data,
});

export const fetchProductFailure = (
  error: string
): FetchProductFailureAction => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: error,
});


// Function to call an API 
// I will give you an assignment, 

export const fetchProduct = () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(fetchProductStart());
        try {
            const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
            dispatch(fetchProductSuccess(response.data));
            console.log(response.data, "FROM API");
        } catch (error: any) {
            dispatch(fetchProductFailure(error.message));
        }
    }
}

