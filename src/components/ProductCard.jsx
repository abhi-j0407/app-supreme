/* eslint-disable react/prop-types */
import styled from "styled-components";

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
  return (
    <StyledCard>
      <div>Name: {product?.title || "no title"}</div>
      <div>Description: {product?.description || "no desc"}</div>
      <div>Price: $ {product?.price || "no price"}</div>
    </StyledCard>
  );
};

export default ProductCard;
