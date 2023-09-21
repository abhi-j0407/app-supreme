/* eslint-disable react/prop-types */
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const StyledCard = styled.div`
  width: 420px;
  background-color: var(--accent-light-olive);
  border-radius: 30px;
  overflow: hidden;
`;

const StyledImageDiv = styled.div`
  position: relative;
  width: 100%;

  > img {
    height: 300px;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 0 0 30px 30px;
  }
`;

const StyledButtonsArray = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  right: 40px;
  bottom: -15px;
`;

const StyledContent = styled.div`
  width: 100%;
  padding: 30px 20px 20px;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  > div {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    font-size: 20px;

    > h4 {
      max-width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 50px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 14px;
    opacity: 0.75;
  }
`;

const ProductCard = ({ product }) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product?.id);

  return (
    <>
      {/* <StyledCard>
      <div>Name: {product?.title || "no title"}</div>
      <div>Description: {product?.description || "no desc"}</div>
      <div>Price: $ {product?.price || "no price"}</div>
      {productQuantity > 0 ? (
        <StyledButtonsArray>
          <button onClick={() => cart.removeOneFromCart(product?.id)}>-</button>
          <p>In cart: {productQuantity}</p>
          <button onClick={() => cart.addOneToCart(product?.id)}>+</button>
          <button onClick={() => cart.deleteFromCart(product?.id)}>
            Remove from Cart
          </button>
        </StyledButtonsArray>
      ) : (
        <button onClick={() => cart.addOneToCart(product?.id)}>
          Add to cart
        </button>
      )}
      </StyledCard> */}
      <StyledCard>
        <StyledImageDiv>
          <img src="/src/assets/images/product (2).jpg" alt="" />
          <StyledButtonsArray>
            <button>add</button>
          </StyledButtonsArray>
        </StyledImageDiv>
        <StyledContent
        >
          <div>
            <h4>{product?.title || "No Title"}</h4>
            <p>${product?.price || "no price"}</p>
          </div>
          <p>{product?.description}</p>
        </StyledContent>
      </StyledCard>
    </>
  );
};

export default ProductCard;
