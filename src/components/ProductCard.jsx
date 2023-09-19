/* eslint-disable react/prop-types */
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const StyledCard = styled.div`
  border: 1px solid red;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const ProductCard = ({ product }) => {

  const cart = useContext(CartContext);

  return (
    <StyledCard>
      <div>Name: {product?.title || "no title"}</div>
      <div>Description: {product?.description || "no desc"}</div>
      <div>Price: $ {product?.price || "no price"}</div>
      <button onClick={() => cart.addOneToCart(product?.id)}>Add to cart</button>
    </StyledCard>
  );
};

export default ProductCard;
