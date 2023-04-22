import { ADD_TO_CART, CartActionTypes, CLEAR_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { Cart, Product } from "../types/types";


const initialState: Cart = {
    cart: [],
    total: 0
};

export default function CartReducer(state = initialState, action: CartActionTypes): Cart {
    switch (action.type) {
        case ADD_TO_CART: 
            return {
                total: state.total + action.payload.price,
                cart: [...state.cart, action.payload]
            }
        case REMOVE_FROM_CART: 
            return {
                total: state.total - action.payload.price,
                cart: state.cart.filter((product: Product) => product.id !== action.payload.id)
            }
        case CLEAR_CART:
            return {
                total: 0,
                cart: []
            }
        default:
            return state;
    }
}