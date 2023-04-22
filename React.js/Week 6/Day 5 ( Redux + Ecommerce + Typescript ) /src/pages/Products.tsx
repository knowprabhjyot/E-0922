import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchProduct } from "../actions/productActions";
import ProductCard from "../components/ProductCard";
import { ProductState } from "../reducers/productReducer";
import { Product } from "../types/types";

const ProductSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 12px;
`;

const Products: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  /// fetching products from the store
  const { isLoading, isError, products } = useSelector(
    (state: ProductState) => state
  );

  useEffect(() => {
    // This is where you call the api
    dispatch(fetchProduct());
  }, []);

  // Calling that particular function
  return (
    <ProductSection>
      {isLoading ? (
        <h3>Fetching Data from API...</h3>
      ) : (
        products.map((product: Product) => {
          return <ProductCard {...product} />
        })
      )}
    </ProductSection>
  );
}
