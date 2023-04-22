import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../actions/cartActions";
import { Product } from "../types/types";

// Create your own Props here

const ProductCardContainer = styled.div`
  border: 1px solid white;
  padding: 6px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 300px;
  }
  button {
    margin-top: auto;
    height: 32px;
  }
`;

const ProductCard: React.FC<Product> = ({
  id,
  title,
  image,
  description,
  category,
  price,
}) => {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const data: Product = {
        id,
        title,
        image,
        description,
        category,
        price
    };

    dispatch(addToCart(data));
  };

  return (
    <ProductCardContainer>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <b>Price: {price}</b>
      </p>
      <p>
        <b>Category: {category}</b>
      </p>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </ProductCardContainer>
  );
};

export default ProductCard;
