/* eslint-disable react/prop-types */
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import { useContext, useRef } from "react";
import Button from "./Button";

const StyledCard = styled.div`
  width: 420px;
  background-color: var(--accent-light-olive);
  border-radius: 30px;
  overflow: hidden;
  filter: drop-shadow(0px 6px 10px #121212);
`;

const StyledImageDiv = styled.div`
  position: relative;
  width: 100%;
  filter: drop-shadow(0px 10px 17px var(--accent-dark-olive));

  > img {
    height: 300px;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 0 0 30px 30px;
  }
`;

const StyledButton = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  right: 25px;
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
    padding-right: 10px;
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

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const ProductCard = ({ product }) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product?.id);
  const randomImg = useRef(randomIntFromInterval(1, 5));
  

  return (
    <StyledCard>
      <StyledImageDiv>
        <img src={`/src/assets/images/product (${randomImg.current}).jpg`} alt="" />
        <StyledButton>
          {productQuantity > 0 ? (
            <>
              <Button onClick={() => cart.removeOneFromCart(product?.id)}>
                -
              </Button>
              <Button>{productQuantity}</Button>
              <Button onClick={() => cart.addOneToCart(product?.id)}>+</Button>
              <Button onClick={() => cart.deleteFromCart(product?.id)}>
                Remove
              </Button>
            </>
          ) : (
            <Button onClick={() => cart.addOneToCart(product?.id)}>Add</Button>
          )}
        </StyledButton>
      </StyledImageDiv>
      <StyledContent>
        <div>
          <h4>{product?.title || "No Title"}</h4>
          <p>${product?.price || "no price"}</p>
        </div>
        <p>{product?.description}</p>
      </StyledContent>
    </StyledCard>
  );
};

export default ProductCard;
