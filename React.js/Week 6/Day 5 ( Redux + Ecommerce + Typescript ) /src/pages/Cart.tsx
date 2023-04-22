import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart } from "../actions/cartActions";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/types";

const CartSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Cart: React.FC = () => {
  const { cart, total } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  console.log(total, "total");

  const handleAllClear = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <button onClick={handleAllClear}>Clear the cart</button>
      <h1>TOTAL: {total}</h1>
      <CartSection>
        {cart.map((cartItem: Product) => {
          return <ProductCard {...cartItem} />;
        })}
      </CartSection>
    </>
  );
};

export default Cart;
